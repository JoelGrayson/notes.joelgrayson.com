---
title: Mechanics
description: 
---

| **Linear**                                                                                               | **Rotational**                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Displacement $\vec x$                                                                                    | Angle $\vec \theta$                                                                                                                                                 |
| Mass $m$                                                                                                 | Moment of inertia $I=\alpha MR^2$ where $M$ is mass and $R$ is the largest distance a particle is from axis or $I=\sum m_ir_i^2$ for $i$th particle [$kg\cdot m^2$] |
| Velocity $\vec v={\vec{\Delta x}\over\Delta t}$ [$\frac{m}s$]                                            | Angular velocity $\vec \omega=\frac{\Delta\vec \theta}{\Delta t}$ [$\frac{\text{rad}}{s}$] $v_t=  \vec \omega r$ ([$v_t$=tangential velocity] must be in rads)      |
| Momentum $\vec p=m\vec v$ [$kg\cdot m\over s$]                                                           | Angular Momentum $\vec L=I\vec \omega$ [$kg\cdot m^2\over s$]                                                                                                       |
| Impulse $\vec{\Delta p}=\vec{p_f}-\vec{p_0}$ \[ditto] $\vec{\Delta p}$ is also written as $J$            | Twirl  $\vec{\Delta L}=\vec{L_f}-\vec{L_i}$ - change in angular momentum                                                                                            |
| Force $\vec F=\frac{\vec{\Delta p}}{\Delta t}$ - average impulse over time [$N$ or $kg\cdot m\over s^2$] | Torque $\vec \tau=\frac{\vec{\Delta L}}{\Delta t}$ - average twirling over time [$N\cdot m$ or $kg\cdot m^2\over s^2$]                                              |
| Kinetic energy $K=\frac12mv^2$                                                                           | Rotational kinetic energy $K_{rot}=\frac12I\omega^2$                                                                                                                |

- $L=mvr$
	- deriv
	  $L=I\omega$
	  $=\alpha mr^2\omega$
	  $=\alpha mr^2\frac v r$
	  $=\alpha mrv$
	  $=mvr$ when $\alpha==1$ for a point particle
	  end deriv
* Centripetal acceleration $a_c = \frac{v^2}r$
* Kinematics
	* $x_f - x_i = \int_{t_0}^{t_f} v(t) dt$
	* $v_f^2 = v_i^2 + 2a\Delta x$
		* TODO: derive
	* $K = \frac12 mv^2 + \frac12 I\omega^2$
* Polar coordinates
	* Acceleration in polar coordinates $\frac{d^2 \vec{r}}{dt^2} = \left(\ddot{r} - r\dot{\theta}^2\right) \hat{r} + \left(2\dot{r}\dot{\theta} + r\ddot{\theta}\right) \hat{\theta}$
* $K = \frac12 mv^2 + \frac12 I\omega ^2$
* Simple harmonic motion
	* If satisfied
		* There is a balancing force proportional to how much displacement
			* Hooke's law $F_x = -kx$
	* Then you know
		* $x(t) = A \cos(\omega t)$ - displacement
		* Angular velocity $\omega = \sqrt{\frac k m}$ (from setting $\rm KE_{max}=PE_{max}$)
		* More that's obvious
			* $v(t) = -A\omega\sin(\omega t)$
			* $v_{\text{max}} = A\omega$ - magnitude of velocity when $x = 0$
			* $T = {2\pi \over \omega}$
* $F=ma=\dot p$
	* $ma=m\ddot x=\ddot {(mx)}=\dot {(mv)}=\dot p$
- Momentum (conserved in collisions)
- $\Sigma E_i+W=\Sigma E_f$ - initial energy of system + work done on system = final energy of system
    - energy [$J$]
        - $K$ - kinetic energy (movement)
            - Translational: $K=\frac12m|\vec v|^2$
            - Rotational: $K=\frac12I\omega^2$
        - $V$ - potential energy (interaction)
            - Gravitational: $V_G(r)=\frac{-Gm_1m_2}{r}$
                - where universal gravitational constant $\rm G=6.67\times10^{-11}\frac{N\cdot m^2}{kg^2}$
                - Simplification for on Earth: $V_G(z)=m|\vec{g}|z$
                    - $z$ is height
                    - $|\vec{g}|$ is $\rm 9.8 \frac{m}{s^2}$
            - Electrostatic: $V_e=\frac1{4\pi\epsilon_0}\frac{q_1q_2}r$
                - Coulomb’s constant $\frac1{4\pi\epsilon_0}=9\times10^9 \frac{\rm N~m^2}{\rm C^2}$
                    ![[Pasted image 20260118121924.png|150]]
            - Spring: $V_s=\frac12kx^2$
                - $k$ is spring constant (specific to an individual spring)
                    - low value - easily moved
                    - high value - could not move (spring at end of train station)
                - $x$ displacement of spring
        - $U$ - internal energy (usually does not change that much)
            - nuclear energy
            - chemical energy
            - thermal energy
    - work
        - $W=\vec{F} \cdot \vec{d}$
        - Watt (W) is $kg\cdot m^2\over s^3$ or $\frac{J}s$
        - Work is zero if there is no displacement/movement
    - power (derivative of work)
        - $P=\frac{\Delta E}{\Delta t}=\frac{W}{\Delta t}=F\cdot v$
        - watt (W)=J/s
        - horsepower (hp)=746 W
    
    - Forces
        - $|\vec{F}_{SF}|\leq\mu_{s}|\vec{F}_N|\approx|\vec{F}_{\text{SF,max}}|$
            - Static friction
            - $\mu_s$ depends on materials in contact
        - $|\vec{F}_{KF}|\approx\mu_{k}|\vec{F}_n|$
            - Kinetic friction
        - $|\vec{F}_D|\approx\frac12C\rho A|\vec v|^2$
            - Drag
        - ${F}_{sp}=-kx$
            - Spring force (AKA Hooke’s law)


### Derivations
* Kinematics
	* $x_f - x_i = \int_{t_0}^{t_f} v(t) dt$
	  $= \int_{t_0}^{t_f} a t~dt$ for constant acceleration
	  $= [\frac12 at^2]^{t_f}_{t_0}$
	  $= \frac12 at_f^2$
* Simple harmonic motion
	* ![[01.18.2026 screenshot 000299.png]]

