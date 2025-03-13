'use client';

import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

export function Cursor() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorMode, setCursorMode] = useState('default'); // default, text, link, etc.
  const velocity = useMotionValue(0);
  const lastPos = useRef({ x: 0, y: 0 });
  const thrusterRef = useRef(null); // Ref for the thruster element
  const directionRef = useRef({ x: 0, y: -1 }); // Default pointing up

  // Motion values for smooth animations
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const scale = useMotionValue(1);
  const rotation = useMotionValue(0);
  
  // Transform values
  const thrusterOpacity = useTransform(velocity, [0, 5, 10], [0.3, 0.6, 0.9]);
  const thrusterSize = useTransform(velocity, [0, 5, 10], [0.6, 1, 1.5]);
  const shieldOpacity = useTransform(velocity, [0, 10], [0, 0.3]);

  // Add particles for engine exhaust and weapon fire
  const [particles, setParticles] = useState([]);
  const [stars, setStars] = useState([]);
  
  // Generate initial starfield
  useEffect(() => {
    const newStars = [];
    for (let i = 0; i < 30; i++) {
      newStars.push({
        id: `star-${i}`,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2
      });
    }
    setStars(newStars);
  }, []);

  // Update cursor position with physics and calculate direction
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calculate velocity based on mouse movement
      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      velocity.set(Math.min(distance, 10));
      
      // Calculate direction vector (normalized)
      if (distance > 0.1) {
        const nx = dx / distance;
        const ny = dy / distance;
        directionRef.current = { x: nx, y: ny };
      }
      
      // Calculate rotation angle based on direction
      const angle = Math.atan2(directionRef.current.y, directionRef.current.x) * (180 / Math.PI);
      rotation.set(angle + 90); // +90 to make it point in direction of travel
      
      // Update position
      setCursorPosition({ x: e.clientX, y: e.clientY });
      
      // Smooth animation with spring physics
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      
      // Add engine particle when moving fast
      if (distance > 3) {
        const particleCount = Math.min(Math.floor(distance / 3), 3);
        for (let i = 0; i < particleCount; i++) {
          if (Math.random() > 0.6) {
            addEngineParticle(e.clientX, e.clientY);
          }
        }
      }
      
      // Store position for next velocity calculation
      lastPos.current = { x: e.clientX, y: e.clientY };
      
      // Detect element under cursor
      const target = e.target;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || 
          target.closest('button') || target.closest('a')) {
        setCursorMode('link');
        setIsHovering(true);
      } else if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || 
                target.contentEditable === 'true') {
        setCursorMode('text');
        setIsHovering(true);
      } else {
        setCursorMode('default');
        setIsHovering(false);
      }
    };

    // Mouse event handlers for "weapon fire" effect
    const handleMouseDown = () => {
      setIsClicking(true);
      scale.set(1.2); // Ship expands slightly when firing
      
      // Create weapon blast particles
      for (let i = 0; i < 12; i++) {
        addWeaponParticle(cursorPosition.x, cursorPosition.y);
      }
    };
    
    const handleMouseUp = () => {
      setIsClicking(false);
      scale.set(1);
    };

    // Add engine exhaust particle
    const addEngineParticle = (x, y) => {
      // Calculate position behind the ship
      const reverseDir = { x: -directionRef.current.x, y: -directionRef.current.y };
      const offsetDistance = 12;
      const particleX = x + reverseDir.x * offsetDistance + (Math.random() - 0.5) * 6;
      const particleY = y + reverseDir.y * offsetDistance + (Math.random() - 0.5) * 6;
      
      const particle = {
        id: Date.now() + Math.random(),
        x: particleX,
        y: particleY,
        scale: 0.5 + Math.random() * 0.5,
        velocity: {
          x: reverseDir.x * (Math.random() * 2 + 1),
          y: reverseDir.y * (Math.random() * 2 + 1)
        },
        opacity: 0.8 + Math.random() * 0.2,
        color: Math.random() > 0.3 ? 
          `hsl(${Math.random() > 0.5 ? 180 : 200}, 100%, ${70 + Math.random() * 20}%)` : 
          `hsl(${40 + Math.random() * 30}, 100%, ${70 + Math.random() * 20}%)`
      };
      
      setParticles(prev => [...prev.slice(-25), particle]); // Keep max 25 particles
    };

    // Add weapon blast particle
    const addWeaponParticle = (x, y) => {
      // Calculate random direction from the ship
      const angle = Math.random() * Math.PI * 2;
      const speedFactor = Math.random() * 3 + 2;
      
      const particle = {
        id: `weapon-${Date.now()}-${Math.random()}`,
        x: x + (Math.random() - 0.5) * 10,
        y: y + (Math.random() - 0.5) * 10,
        scale: 0.8 + Math.random() * 0.8,
        velocity: {
          x: Math.cos(angle) * speedFactor,
          y: Math.sin(angle) * speedFactor
        },
        opacity: 1,
        color: cursorMode === 'link' ? 
          `hsl(${200 + Math.random() * 40}, 100%, 70%)` : 
          `hsl(${300 + Math.random() * 60}, 100%, 75%)`,
        isWeapon: true
      };
      
      setParticles(prev => [...prev, particle]);
    };

    // Update and cleanup particles
    const particleInterval = setInterval(() => {
      setParticles(prev => prev
        .map(p => ({
          ...p,
          x: p.x + p.velocity.x,
          y: p.y + p.velocity.y,
          opacity: p.opacity - (p.isWeapon ? 0.08 : 0.05),
          scale: p.scale * (p.isWeapon ? 0.92 : 0.95)
        }))
        .filter(p => p.opacity > 0)
      );
      
      // Move stars for parallax effect based on current direction
      setStars(prev => prev.map(star => {
        const newX = star.x - directionRef.current.x * 0.2;
        const newY = star.y - directionRef.current.y * 0.2;
        
        return {
          ...star,
          x: newX < 0 ? newX + window.innerWidth : newX > window.innerWidth ? newX - window.innerWidth : newX,
          y: newY < 0 ? newY + window.innerHeight : newY > window.innerHeight ? newY - window.innerHeight : newY
        };
      }));
    }, 16);
    
    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      clearInterval(particleInterval);
    };
  }, [cursorX, cursorY, scale, rotation, velocity, cursorPosition]);

  return (
    <>
      {/* Starfield backdrop */}
      <div className="fixed inset-0 pointer-events-none z-30">
        {stars.map(star => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: star.x,
              top: star.y,
              width: star.size,
              height: star.size,
              opacity: star.opacity
            }}
          />
        ))}
      </div>
    
      {/* Particles system for engine exhaust and weapons */}
      <div className="fixed inset-0 pointer-events-none z-40">
        <AnimatePresence>
          {particles.map(particle => (
            <motion.div
              key={particle.id}
              className={`absolute ${particle.isWeapon ? 'rounded-full' : 'blur-sm'}`}
              style={{
                x: particle.x,
                y: particle.y,
                backgroundColor: particle.color,
                width: particle.isWeapon ? 6 : 4,
                height: particle.isWeapon ? 6 : 4
              }}
              initial={{ scale: 0 }}
              animate={{ 
                scale: particle.scale,
                opacity: particle.opacity
              }}
              exit={{ scale: 0, opacity: 0 }}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Custom Spaceship Cursor */}
      <motion.div
        className="fixed pointer-events-none z-50"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          rotate: rotation
        }}
      >
        {/* Spaceship Body */}
        <motion.div
          className="relative"
          style={{ scale }}
        >
          {/* Shield effect on hover */}
          {isHovering && (
            <motion.div
              className="absolute rounded-full border-2 border-cyan-400/30"
              style={{
                width: 40,
                height: 40,
                x: -20,
                y: -20,
                boxShadow: "0 0 15px rgba(0, 255, 255, 0.3)"
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1.5, opacity: 0.4 }}
              transition={{ duration: 0.3 }}
            />
          )}
          
          {/* Shield bubble when moving fast */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: 32,
              height: 32,
              x: -16,
              y: -16,
              border: "1px solid rgba(64, 224, 208, 0.4)",
              background: "radial-gradient(circle, rgba(64, 224, 208, 0.1) 0%, rgba(64, 224, 208, 0) 70%)",
              opacity: shieldOpacity
            }}
          />
          
          {/* Main ship body */}
          {cursorMode === 'text' ? (
            // Text cursor mode (vertical beam)
            <div className="w-1 h-12 bg-cyan-400 blur-[1px]" />
          ) : (
            // Default spaceship shape
            <div className="relative">
              {/* Ship body */}
              {/* <div 
                className="w-8 h-12"
                style={{
                  background: cursorMode === 'link' ? 
                    "linear-gradient(to bottom, #2979ff 0%, #00e5ff 100%)" : 
                    "linear-gradient(to bottom, #7c4dff 20%, #00b8d4 100%)",
                  clipPath: "polygon(50% 0%, 100% 100%, 50% 80%, 0% 100%)",
                  boxShadow: "0 0 10px rgba(0, 200, 255, 0.5)"
                }}
              /> */}
              
              {/* Cockpit glow
              <div
                className="absolute w-2 h-3 rounded-full bg-white/70 blur-[1px]"
                style={{
                  left: "calc(50% - 1px)",
                  top: "25%"
                }}
              /> */}
              
              {/* Wing lights */}
              <div
                className="absolute w-1 h-1 rounded-full bg-yellow-400 blur-[1px]"
                style={{
                  left: 0,
                  top: "60%"
                }}
              />
              <div
                className="absolute w-1 h-1 rounded-full bg-yellow-400 blur-[1px]"
                style={{
                  right: 0,
                  top: "60%"
                }}
              />
              
              {/* Engine thruster */}
              <motion.div
                ref={thrusterRef} // Attach ref to the thruster element
                className="absolute rounded-full blur-sm"
                style={{
                  width: 6,
                  height: isClicking ? 5 : 8,
                  x: -3,
                  y: 9,
                  left: "50%",
                  background: "linear-gradient(to bottom, #ff9500, #ff5252)",
                  scale: thrusterSize,
                  opacity: thrusterOpacity
                }}
              />
            </div>
          )}
          
          {/* Target lock indicator when clicking */}
          {isClicking && cursorMode !== 'text' && (
            <motion.div
              className="absolute rounded-full border border-red-500"
              style={{
                width: 24,
                height: 24,
                x: -12,
                y: -12,
              }}
              initial={{ scale: 2, opacity: 0.8 }}
              animate={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4, repeat: 1 }}
            />
          )}
        </motion.div>
      </motion.div>
    </>
  );
}