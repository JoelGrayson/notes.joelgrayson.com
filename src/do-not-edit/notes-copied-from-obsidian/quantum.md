---
title: Quantum Mechanics
description: 
---

* Particle in a box
	* $V(x)=\infty$ except $V(x)=0$ in the box
		* TISE tells us 
* When there is 
- Standing wave
	- nodes - where the wave doesn't move at all
- Interpretations
	- Copenhagen interpretation: when you measure something, it compels the particle to be there
	- Realists: the particle was always there due to hidden variables
		- Einstein was a realist
		- Bell's theorem proves that no local hidden variables
- Wavefunction
	- $\Psi(x,t)$ is time-dependent
		- Max Born: wavefunction tells you probability of finding a particle somewhere (it's the PDF, with $|\Psi(x,t)|^2~dx$ telling you the probability of finding it between $x$ and $x+dx$). Schrödinger initially: wavefunction tells you the density of where the particle is (wrong).
		- Atom orbital defined by where probability of finding something is >90%
		- Complex
	- $\psi(x)$ is time-independent
		- Is real
- Operators
	- Hamiltonian operator $\hat H$ yields total energy of particle described by $\Psi$
		- $\hat H=\hat T + \hat V$
		- $=\frac{\hat p^2}{2m} + V$
	- $\hat p=-i\hbar\frac{\partial}{\partial x}$
		- deriv
		  ![[02.08.2026 screenshot 000434.png]]
		  end deriv
		- $\hat p^2=-\hbar^2\frac{\partial^2}{\partial x^2}$
	* If the expectation value of an operator $\langle A\rangle$ is real, A is Hermitian
- Schrödinger equation tells you how to calculate the wavefunction
	- Time-dependent: $i\hbar\Psi_t=-\frac{\hbar^2}{2m}\Psi_{xx}+V(x,t)\Psi$
		- deriv
		  Haha just kidding
		  end deriv
		- $i\hbar\Psi_t(\vec r, t)=\hat H\Psi(\vec r,t)$
	- Time-independent: $\hat H\psi(\vec r)=E\psi(\vec r)$
		- Expands to $-\frac{\hbar^2}{2m}\psi_{xx}+V\psi=E\psi$
- Heisenberg uncertainty principle: $\Delta p\Delta x\ge\frac\hbar2$
	- Can't know both energy and position of an electron
- $E=\hbar\omega$
	- deriv
	  ![[02.01.2026 screenshot 000380.png]]
	  end deriv
- phase velocity $v_p$ - speed of individual wave ripples (one frequency)
  group velocity $v_g$ - speed of the overall wave (all frequencies added together)
	- Wave packet - sum of multiple frequencied waves such that it is collective in one place
- $p=\hbar k$
	- deriv
	  $\lambda=\frac h p$ from De Broglie's relation
	  $p=\frac h \lambda$
	  $k=\frac{2\pi}\lambda \implies \frac{1}\lambda=\frac k{2\pi}$
	  $p=\frac{hk}{2\pi}$
	  $p=\hbar k$
	  end deriv
* For light, $\omega=ck$ because speed of light is constant
	* deriv
	  ${2\pi\over T}=v{2\pi\over l}$ and $v=\frac l T$
	  end deriv
	* When v is not fixed, $\omega$ is a function of k: $\omega(k)$
		* $k$ tells you how fast it moves in space while $\omega$ tells you how fast it oscillates in time
- $L=n\hbar$
	- deriv
	  ![[02.01.2026 screenshot 000377.png]]
	  end deriv
- De Broglie: all matter must act like a wave with wavelength $\lambda$ since light is both a wave and particle (photon)
	- $\lambda=\frac{h}p$ - De Broglie's relation
		- deriv
		  ![[02.01.2026 screenshot 000378.png]]
		  end deriv
- Wavenumber $k=\frac{2\pi}\lambda$ - how much a wave's phase advances over a unit of space
- $v={\lambda\over T}=\lambda f$
	- deriv
	  In one period, the wave travels $\lambda$ distance. This takes period $T$ time, so the speed is distance/time which is $\lambda\over T$.
	  end deriv
- Linear wave equation $y_{xx}=\frac1{v^2}y_{tt}$
