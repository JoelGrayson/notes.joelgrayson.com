---
title: Circuits
description: "basic EE theory: circuit analysis (nodal analysis/superposition), equations for diodes and MOSFETs, logic gates/cMOS, amplifiers"
---
This is a combination of knowledge that I have gained from ENGR 40M and EE 101A, both of which I took during summer quarter in 2025, and self-learning.

- 
* Four amplifier types
	- ![[08.07.2025 screenshot 1.png|500]]
	  These four are equivalent. It's like VCVS, CCCS, VCCS, and CCVS. To remember, think of transconductance as having the gain of conductance so output current/input voltage and for transresistance as having the gain of resistance so output voltage/input current.
		- When there is an output voltage (for transresistance and voltage amplifier), it should be measured when the output terminals are open for there to be no current flowing through $R_o$ which would decrease $v_o$.
		- When there is an output current, it should be measured when short-circuited so that none of the output current flows through $R_o$ (you get all the current flowing from the current source in $i_o$)
		* trans - input and output of different types/at different places (voltage → current, current → voltage)
		* m in $G_m$ and $R_m$ is for "mutual" like in "mutual inductance" because the current and voltage are at separate ports (similar to trans-)
	- Equations for swapping between them using transformations (see derivation at [[#Four Interchangeable Amplifier Types]]): $A_{vo}=A_{is}\frac{R_o}{R_i}=G_mR_o=\frac{R_m}{R_i}$
	- Three parameters necessary for forming an amplifier: $R_{\text{IN}}$, $R_{\rm OUT}$ and gain
	- Gains
		- $A_{vo}$/$A_{is}$/$G_m$/$R_m$ - for the voltage/current source (no loads)
			- intrinsic gain
		- $A_v$/$A_i$ - also considers $R_i$ and $R_o$
			- loaded gain
		- $G$ - everything, considers source resistance and multiple stages if applicable
			- overall system gain
	- CD Amplifier
		- Source follower because $v_S$ follows $v_I$
	- CS Amplifiers
		- ![[08.07.2025 screenshot.png]]
			- $r_o$ defines how leaky the transistor is due to channel-length modulation (increasing $v_{DS}$ also increases $i_D$). See [[#How $r_o$ works]]. Without channel-length modulation ($\lambda=0$), $r_o$ is $\infty$
				- $r_o=\frac1{\lambda I_D'}$
			- $R$ models the voltage source's real-world imperfection (cannot supply infinite current)
			- Capacitors block out DC bias, just allowing the signal to pass through
		- Gain $A_v=\frac{v_o}{v_i}=-g_m(r_o||r_D||r_L)$ - is lower when there's a load resistance
			- When no load resistance, open circuit gain $A_{vo}=-g_m(r_o||r_D)$
		- $R_D$ allows the output current to be converted into an output voltage
		- Early voltage $V_A$ is $\frac1\lambda$ so $r_o=\frac{|V_A|}{I_D}$ meaning it's good if $V_A$ and $r_o$ are large because then the MOSFET is not very leaky
		- Bias circuit - the part of the circuit that sets the DC voltage so the transistor can operate in a small-signal linear region without distortion
		* Operating point - point at which load line (which describes all current-voltage pairs that the load constrains) matches the characteristic equation of the device
			* Q-point - point at which signal voltage is 0 (quiescent as in dormant/inactive)
		* A VCCS is a transconductance amplifier
		* transconductance $g_m$ indicates how much $i_D$ changes for small changes in $v_I$ AKA $v_{GS}$. How much is transferred over.
			* $g_m\stackrel\Delta=\frac{i_D}{v_{GS}}|_Q$
		* Drain resistance $r_o\stackrel\Delta=\frac{v_{DS}}{i_D}$
* MOSFETs
	* MOSFET acts as a VCCS with a transconductance $g_m$
	* Operate in saturation region for amplifiers and triode region for CMOS
	* CMOS - complementary MOS, manufacture nMOS and pMOS transistors on the same device
	* body is connected to source for both nMOS and pMOS
	* $r_o$ is for saturation
	* $r_{DS}$ is for triode (variable resistor)
	- nMOS in enhancement-mode
		- transconductance - $\frac{I_{OUT}}{V_{IN}}$, how much the current output changes based on how the input voltage is modified
			- process transconductance $k'=\mu_n C_{ox}$
				- mobility $\mu_n$
		- $g_{DS} = \frac{1}{r_{DS}}=\mu C_{ox} \frac W L v_{ov}=k_nv_{OV}$ when $v_{DS}$ is negligible
		- $I=g_{DS}v_{DS}$
		- called enhancement-type MOSFET because increasing $v_{GS}$ above $V_t$ enhances the region's conductivity. For depletion-mode MOSFET, increasing $v_{GS}$ above $V_t$ depletes the region (stops it from conducting).
		- $C_{ox}=\frac{\varepsilon_{ox}}{t_{ox}}$ where $\epsilon_{ox}=3.9\epsilon_0$
		- Equations for the three regions (cutoff, triode, and saturation):![[nMOS-enhancement.jpg|300]]
		* $k'=\mu C_{ox}$
		* $k=\mu C_{ox}\frac W L$
		* channel-length modulation occurs because as $v_{DS}$ increases, the channel length changes, changing the current
* Drift velocity $v_D=\mu E$ where $\mu$ is the mobility
* RC circuit (derivation at [[#RC Circuit]])
	* In general, $V(t)=V(\infty)+[V(0^+)-V(\infty)]e^{-t/\tau}$
		* I interpret this as the first term being the permanent response and the second being the transient response due to the $e^{-t/\tau}$ multiplier. Since a-b means to a from b, the sum is V(∞) + a vector that disappears with time that says go to V(0) from V(∞). Here it is animated:
		  ![[rc-voltage.gif|300]]
	* Charging
		* $Q(t)=Q_{\text{charged}}(1-e^{-t/\tau})$
		* $I(t)=\frac{V_b}Re^{-t/\tau}$
		* $V(t)=V_b(1-e^{-t/\tau})$
	* Discharging
		* $Q(t)=Q_0e^{-t/\tau}$
		* $I(t)=\frac{-V}Re^{-t/\tau}$
		* $V(t)=V_0e^{-t/\tau}$
* NOT, NAND, NOR Gates ![[NOT-NAND-NOR.jpg]]
- Tellegen's theorem - in an electrical network, sum of instantaneous powers in all branches is 0
* Diode
	* Assuming
		* Assume that it is ON ($V_f$ is reached). If we can show that there is a positive current through it, then there must be $V_f$ across the diode.
		* Assume that it is OFF. If we can show that there is a voltage across it greater than $V_f$, then it must be ON.
	* Assume all OFF. When in parallel and choosing which one to turn ON, choose the one with lower $V_f$
	* Models
		* ideal diode - V_f=0
		* constant voltage drop model
			* FKA piecewise linear model - V_f=0.7
		* Shockley model $I = I_s \left( e^{\frac{V_D}{n V_T}} - 1 \right)$
		* reverse bias model
	* Open circuit voltage, short circuit current
	* Ideal diode
		* Acts like an open circuit when voltage less than the forward voltage
		* Acts like a constant voltage source for voltages greater than the forward voltage
		* Ideal diode's forward voltage is 0V
	* p-n junction
		* Depletion region
	* Silicon diode forward voltage - 0.7 V
	* Doping
		* P-type doping - Boron, adds a hole
		* N-type doping - Phosphorus, adds a free electron
		![[Screenshot 2025-07-03 at 11.27.54 AM.jpg|150]]
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
	* Voltage cannot change instantaneously on a capacitor (unless we do dirac delta functions)
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
### Four Interchangeable Amplifier Types
![[four-interchangeable-amplifier-types.jpg]]


### Amplifier $A_{vo}=-g_MR_D$
Also, $|A_{v}|=g_mR_L'\approx g_mr_o=(\frac{2I_D}{V_{OV}})(\frac{1}{\lambda I_D})=\frac2{\lambda V_{OV}}$
![[amplifier-Avo.jpg]]


### Transconductance $g_M$ Expressed in More Ways
In saturation, $g_M=k_nV_{OV}=\frac{2I_D}{V_{OV}}=\sqrt{2I_{DQ}k_n}$

![[amplifier-derivation.jpg]]
![[amplifier-derivation-2.jpg]]


### Transconductance $g_M$ in the 3 MOSFET Modes
$g_M=k_nv_{OV}$ in saturation
$g_M=k_nv_{DS}$ in triode

![[tidm-1.jpg]]
![[tidm-2.jpg]]


### Amplifier $i_D$
![[amplifier-id-1.jpg]]
![[amplifier-id-2.jpg]]


### How $r_o$ works
o in $r_o$ is for "output" as in "output resistance" since it models the leakiness of a current source. For an ideal current source, increasing the voltage wouldn't affect how much the current source delivers. For a non-ideal leaky current source (which $r_o$ simulates), increasing voltage ($v_{DS}$) also increases current output ($i_D$).
$r_o=\frac1{\lambda I_D'}$
![[how-r0-works.jpg]]


### RC Circuit \#rc-deriv
![[RC-circuit.jpg]]


### Deriving Triode Mode Current (Variable Resistor) Ignoring Channel Length Voltage Differences
![[deriving-triode-mode-iv-relation-for-small-vds.jpg]]


### Maximize $P_L$ by Changing $R_L$
![[maximize-pl-by-changing-rl.jpg]]
![[power-thoughts.jpg]]
Conclusion: set $R_L=R_{Th}$ for most power output (but at 50% efficiency). Set $R_L>R_{Th}$ for more efficiency but drawing less power.

### Thévenin Equivalent Circuit
![[thevenin-equivalent-circuit.jpg]]


### CMOS Must Invert
![[cmos-must-invert.jpg]]


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

