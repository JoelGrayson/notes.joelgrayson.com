I learned about electricity and magnetism in spring quarter of freshman year in Physics 43: Electricity and Magnetism

[Link to Openstax textbook](https://openstax.org/books/university-physics-volume-2/pages/preface)

* Electric field energy density $u_E=\frac12\epsilon_0E^2$ :: $J/m^3$
* Magnetic field energy density $u_B=\frac12\frac{B^2}{\mu_0}$
* Lorentz force $\vec F=q\vec E+q\vec v\times\vec B$
* Maxwell's Equations
	* $∯\vec E\cdot d\vec A=\frac{Q_\text{encl.}}{\epsilon_0}$ Gauss' Law
		* LHS is the electric flux $\Phi_E$
	* $∯ \vec B\cdot d\vec A=0$ Gauss' Law for magnetism
		* In other words, there are no magnetic monopoles
	* $\oint \vec E\cdot d\vec l=-\frac{d\Phi_B}{dt}$ Faraday's Law of Induction
		* A changing magnetic field produces an e-field
	* $\oint \vec B\cdot d\vec l=\mu_0(I_{\text{encl.}}+I_d)$ Ampère–Maxwell Law where displacement current $I_d=\epsilon_0\frac{d\Phi_E}{dt}$ results from a changing E-field
		* A changing e-field produces a magnetic field

* Circuits
	* Time constant τ tells you how long it takes for the current to reach 63.2% of its final value


### Equation Sheet
![[e&m-reference-sheet.jpg]]
![[e&m-reference-sheet-part-2.jpg]]

### Class Equation Sheet
![[Final_Exam_Phys43_Sp25_Equation_Sheet.pdf]]
### Magnetism
* irradiance - energy÷area received on surface ($\frac W{m^2}$)
	* AKA radiant flux density
	* solar constant - 1 kW/m³
* luminosity - rate of emission of radiation :: W
	* 3E26 is solar luminosity
* Electromagnetic waves
	* Not exactly understood but taken for granted
		* $E(x)=cB(x)$ in a vacuum
		* energy density $u=\epsilon_0E^2$
		* $c=\frac1{\sqrt {\mu_0\epsilon_0}}$
		* Time average operator \<>
		* $<S'>=\frac12\frac{E_0^2}{\mu_0c}$
	* $A\cos(kx-\omega t)$
		* wave number $k=\frac {2\pi} \omega$
	* Poynting vector $\vec S=\frac 1 {\mu_0}\vec E\times\vec B$ - instantaneous rate of energy transfer per area per time (energy/area/time), power/area
		* Intensity $I = <S>$ is the time-averaged value of the Poynting vector
	* Radiation pressure $p={<S> \over c}=\frac I c=u$
		* It is $2u$ if reflecting
	* pressure - force per area
	* intensity - power per area
	  ![[06.04.2025 screenshot.png]]
* Waves in general
	* Period T - time taking for a wave to complete one full cycle (crest to crest or trough to trough)
	* Frequency :: Hz = $s^{-1}$ - $\frac1T$ how many waves pass through a point for unit time
	* Wavelength $\lambda$ - length of the wave
	* $v=\frac\lambda{T}$
* An electron has a magnetic dipole of 1 Bohr magneton
* $B_\text{field inside}=KB_\text{vacuum}$
	* A material's relative magnetic permeability $K=\mu_r =1+\chi$
		* $\mu_R=\frac\mu{\mu_0}$ where $\mu$ is the permeability of the material and $\mu_0$ is the permeability of free space, which is $4\pi\times10^{-7}$
		* \<1 for diamagnetic
		* \>1 for paramagnetic
		* $\gg1$ for ferromagnetic
	* Magnetic susceptibility $\chi$
* Types of magnetism
	* [Diamagnetism](https://www.youtube.com/watch?v=wK7Jr1g4_ws) - repel, temporary
		* Material create weak repulsive force when placed in a magnetic field because the atoms' paired electrons have an induced current which changes their magnetic moments
		* Always there for all materials
		* Diamagnet: water, levitatingSoft frogs
	* Paramagnetism - attract, temporary
		* Materials are weakly attracted. Too weak to pick up the material against its weight.
		* Atoms are magnetic because of unpaired electrons but in random orientation. Putting them in a magnetic field aligns them, so they are attracted toward the magnet
		* Paramagnet: aluminum
		  ![[06.02.2025 screenshot 1.png]]
	* Ferromagnetism - attract
		- Magnetic domains (particles within a domain have the same alignment) which get aligned
		- Magnetize - make the domains align
		- Hard magnets - without external magnet, stay aligned
		- Soft magnets - do not retain magnetization when removed
		- Curie temperature - the temperature at which ferromagnetism stops working because there is too much heat energy which the magnetic alignment forces can't overcome
		- Ferromagnet: iron, cobalt, nickel
* Terminal voltage
	* More current drawn → lower terminal voltage
* Battery EMF - internal voltage inside the battery, which includes an internal resistor


![[Pasted image 20250605120321.png]]
### Dielectrics
![[Pasted image 20250605120331.png]]
![[Pasted image 20250605120538.png]]
![[Pasted image 20250605120554.png]]
![[Pasted image 20250605120630.png]]
![[Pasted image 20250605120638.png]]


# Derivations

### Deriving LR Circuit
![[IMG_1494.jpeg]]
![[IMG_1495.jpeg]]
* LR circuits
	* time constant $\tau_L=\frac L R$
	* energy stored $U_L=\frac12 LI^2$
	* 

### Deriving LRC Circuits
![[Pasted image 20250605130427.png]]

### Deriving RC Circuits
Charging
![[notes.joelgrayson.com/media/IMG_1554.jpeg]]
![[IMG_1555.jpeg]]

Discharging
![[IMG_1556.jpeg]]

### Deriving $\vec F=I(d\vec l\times \vec B)$
![[e&m-magnetic-force.jpg]]

### Deriving Radius of Charge in Magnetic Field
![[e&m-radius-of-charge-in-magnetic-field.jpeg]]



### Deriving Capacitance for Series & Parallel Capacitors
![[Pasted image 20250605120502.png]]

### Deriving Resistance for Series & Parallel Resistors
![[Pasted image 20250605120524.png]]

