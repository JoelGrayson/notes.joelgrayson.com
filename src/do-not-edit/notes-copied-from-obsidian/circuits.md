---
title: Circuits
description: circuits, basic EE theory, logic gates/cMOS
---
This is a combination of knowledge that I have gained from ENGR 40M and EE 101A, both of which I took during summer quarter in 2025, and self-learning.

* 
* NOT, NAND, NOR Gates
  ![[NOT-NAND-NOR.jpg]]
- Tellegen's theorem - in an electrical network, sum of instantaneous powers in all branches is 0
* High voltage is used in transmission because
	* High voltage means that the current goes down for the same power because $P=IV$
		* A lower current means that the voltage drop between the generator and substation, $V=IR$, is smaller since the $R$ of the transmission line is constant and the $I$ decreases. The voltage drop across the transmission lines modeled as resistors went down even though the voltage on the line is higher. With a constant R and a lower current with HV, $P_{\text{loss}}=I^2R$ goes down and $P_{\text{loss}}=\frac{V^2}R$ also goes down since V in the power equation measures the voltage drop, which went down.
* Inductor
	* constant-current device
	* $v=Li'$
	* equivalent combinations like that of a resistor
	* Time constant $\tau=\frac{L}R$
* Capacitors
	* constant-voltage device
	* RC charging: $v(t)=v(\infty)+(v(0^+)-v(\infty))e^{\frac{-t}{RC}}$
	* $\epsilon_r=\frac\epsilon{\epsilon_0}$
		* $\epsilon_r$ - relative dielectric constant
		* $\epsilon$ - dielectric constant
		* $\epsilon_0$ - permittivity of free space (9E-12 F/m)
	* $C=\frac{\epsilon A}{d}$
		* C ∝ A and C ∝ 1/d
	* $Q=CV$ and $I=CV'$
	* Types
		* Ceramic - cheap, low C
		* Polymer - HV
		* Electrolytic - polar, large C
		* Surface mount capacitors
		* IC capacitor
* Waves
	* $\frac1f=T=\frac\lambda{v}\to f=\frac{v}\lambda$
* Nodal analysis: write out KCL (for nodes with unknown voltages) in terms of voltages
	* Full steps
		1. Choose reference node and label the nodes' voltages. Use $V_1, V_2, ...$ for unknown. Use voltage divider to find out relevant voltages if possible.
		2. Label current directions
		3. Apply KCL at all non-reference nodes (using Ohm's law integrated in the eqns)
- Current divider ([[#Current Divider|derivation]])
	- $I_{R_1}=I_\text{tot}\frac{R_\text{tot}}{R_1}$. mn current ∝ inverse of %resistance in same component
		* $I_{R_1}=I_\text{tot}\frac{R_2}{R_1+R_2}$ (special case of two resistors)
- Voltage divider ([[#Voltage Divider|derivation]])
	- $V_1=V_\text{tot}\frac{R_1}{R_\text{tot}}$. mn voltage ∝ %resistance in same component
* Resistor Chart
	![[Screenshot 2025-07-01 at 8.02.29 PM.jpg|300]]
* Double-subscript notation:
  ![[double-subscript-notation.jpg|300]]
* Combination in series and parallel
	* Equivalent resistance for series resistors is sum because KVL means voltages add up and current is the same in series: $V_\text{eq}=V_1+V_2+V_3$ becomes $I(R_{\text{eq}})=I(R_1+R_2+R_3)$
	* Equivalent resistance for parallel resistors is the way it is because KCL means currents add up and voltages constant: $I_{\rm eq}=I_1+I_2+I_3$ becomes $\frac V{R_{\rm eq}}=\frac V{R_1}+\frac V{R_2}+\frac V{R_3}$
	* These all have the same behavior for equivalent resistance/inductor:
	  $V=IR$ - resistance
	  $V=LI'$ - inductance
	* Likewise, these all act the same (flipped, so in parallel they act like resistors would in series)
	  $I=VG$ - conductance
	  $I=CV'$ - capacitance



## Derivations
### Derive Equivalent Inductance for Series and Parallel Inductors
![[derive-inductors-series-and-parallel.jpg]]

### How Dielectrics Increase Capacitance
![[dielectrics-increase-capacitance.jpg]]

### Voltage Divider
For serial resistors, current is the same but voltage is divided across the resistors.
![[voltage-divider.jpg]]

### Current Divider
For parallel resistors, voltage is the same but current is divided across the resistors.
![[current-divider.jpg]]


### Wye-Delta
* Special cases
	* $R_\triangle = 3R_Y$

### Deriving RMS Voltage for a Sinusoidal AC
![[IMG_1996.jpg]]


### First Principles Thinking about Batteries in Series
![[first-principles-thinking-about-batteries-in-series.jpg]]


