---
title: Signals & Systems
description:
---
- Signal - function dependent on 1+ arguments, usually describing a physical aspect of something
	- One-dimensional signal - 1 argument
	- Multi-dimensional signal - multiple arguments
	- DT signal - sequence
	- CT signal - waveform
	* Sampling turns a CT into a DT (analog to digital)
		* Sample every T (sampling interval). $y[n]=y(nT)$
			- Sampling rate 1/T
	- Reconstruction turns a DT into a CT (digital to analog)
- System - takes a signal and outputs a new signal
	- $y[n]=H\{x[n]\}$
	  $y(t)=H\{x(t)\}$
- Properties of a signal, denoted x(t)
	- Energy $E=\int_{-\infty}^\infty |x(t)|^2 dt$
		* deriv
		  The term energy and power are abstract, but you can think of deriving them from the EE definition:
		  $P=I^2R={V^2\over R}$
		  when $R = 1$, this becomes $P=I^2=V^2$. Thus, we can treat the signal x(t) as being either voltage/current.
		  Energy is simply power over time so $E=\int |x(t)|^2 dt$
		  The energy for the signal is evaluated for all time so from $-\infty$ to $+\infty$
		  end deriv
	* Power $P=\underset{\omega=\infty}{\lim} \frac1{2\omega} \int_{-\omega}^\omega |x(t)|^2 dt$
		* Power is average energy
		* When periodic, $P=\frac{1}{T_0}\int_{t_1}^{t_1+T_0}|x(t)|^2~dt$ for any $t_1$
	- Random - involves probability
	  Deterministic
- Properties of a system, denoted H
	- Stability
		- BIBO stable (bounded-input bounded-output stable) - iff $\int_{-\infty}^{\infty}|h(t)|dt\lt\infty$
	- Memory
		- Memoryless if y\[t] is only based on x\[t]
		- Has memory if y\[t] based on x\[not t] (such as x\[t-1])
	- Invertibility
		- $H$ is invertible iff there exists system $H^{-1}$ such that if $y(t)=H\{x(t)\}$ then $x(t)=H^{-1}\{y(t)\}$
	- Time-invariance
		- Time-invariant iff t-shift then apply H is the same as apply H then t-shift
			- t-shift then apply H: $H\{x(t-t_0)\}$
			- apply H then t-shift: $y(t-t_0)$
			- Strategy when checking if time-invariant: write $x'(t)=x(t-t_0)$ to apply $H\{x'(t)\}$ and first find $y(t)$ then t-shift by $t_0$
		- Time-variant - H applies a change to x(t) differently based on each t
	* Linearity
		* Linear iff $H\{a_1x_1(t)+a_2x_2(t)\}==a_1H\{x_1(t)\}+b_1H\{x_2(t)\}$
	* Causality
		* Causal iff y\(t) dependent on only present and past values of x, that is $x(t')~~\forall ~t'\lt t$
	* Real
		* A real system maps real inputs to real outputs
- Singularity functions is either $\infty$ or has no derivative at a point
- Example signals
	- Impulse function $\delta(t)$
		- CT impulse function is also called the Dirac delta function (see [explanatory video here](https://youtu.be/znO9OqXJiDs))
		- Unit doublet function $\delta'(t)=\frac{d\delta}{dt}(t)$
			- deriv
			  TODO
			  end deriv
	- Step function $u(t)$ is 1 if $t\geq0$ else 0
	- Ramp function $r(t)=\begin{cases} t&t\geq0\\0&\text{otherwise}\end{cases}$
	- Rectangular pulse $\Pi(t) = \begin{cases} 1 & |t|\leq\frac12\\0&\text{otherwise} \end{cases}$
	- 
- Example systems
	- Modulation
		- $\underbrace{y(t)}_{\text{modulated signal}}=\underbrace{x(t)}_{\text{message signal}}~~\underbrace{\cos(\omega_ct)}_{\text{carrier signal}}$
			- $\omega_c$ is the carrier frequency
	- Low-pass filter
		- DT
			- $y[n]=\sum_{k=-\infty}^n a^{n-k}x[k]$
		- CT
			- $y(t)=\frac1{\tau}\int_{-\infty}^t e^{-\frac{t-t'}\tau} x(t') dt'$
			- $\tau y'(t) + y(t) = x(t)$
			- deriv
			  TODO
			  end deriv
	- Squarer
		- DT
			- $y[n]=x^2[n]$
		- CT
			- $y(t) = x^2(t)$
- Initial rest - $y[n]=0$ until $x[n]$ is non-zero
- Convolutions
	- Convolving two signals—a(t) and b(t)—returns another signal c(t)
	- CT $c(t) = a(t) * b(t) = \int_{k=-\infty}^{\infty} a(k)b(t-k)dk$
	- DT $c[n] = a[n] * b[n] = \sum_{k=-\infty}^{\infty} a[k]b[n-k]$
	- Convolution is linear
		- Derivation showing convolution is commutative
			- deriv
			  TODO
			  end deriv
	- Given a system H
		- Impulse response $h(t)\triangleq H\{\delta(t)\}$
			- $y[n] = x[n] * h[n]$
				* deriv
				  TODO
				  end deriv
		- Step response $s(t)\triangleq H\{u(t)\}$
			- 
	- How to calculate convolution
		- Method 1: Flip and drag
			- Plot $h[k]$
			- Plot $x[n-k]$ (which is $x[-(k-n)]$, a horizontal flip and then transform right by n)
			- For each fixed value of n, take each k and multiply the two graphs, adding up all these terms to get $y[n]$
		- Method 2: 
	- Useful examples
		- $x[n] * u[n] = \sum_{k=-\infty}^n x[k]$ running sum
			- convolving with the step function gives a running sum
			- deriv
			  TODO
			  end deriv
		- $x[n] * \delta[n] = x[n]$ identity
			- convolving with the impulse function returns the identity
			- deriv
			  TODO
			  end deriv
		- $x[n] * \delta[n-n_0] = x[n-n_0]$ delay
			- deriv
			  TODO
			  end deriv
		- $x(n)*\delta'(t)=x'(t)$ derivative
- Properties
	- Sampling property $x(t)\delta(t-t_0)=x(t_0)\delta(t-t_0)$
		- mn you sample that point
	- Sifting property
		- DT $\sum_{k=-\infty}^{\infty}x[k]\delta[n-k]=x[n]$
		- CT $\int_{t'=-\infty}^\infty x(t')\delta(t-t')dt'=x(t)$
		- mn sifting through the points for the one point (like sifting through water for that one piece of gold)
	- Finite 
* Linear, constant-coefficient differential (CT)/difference (DT) equation
	* DT $\sum_{k=0}^N a_k y[n-k]=\sum_{k=0}^Mb_kx[n-k]$
	* CT $\sum_{k=0}^N a_k \frac{d^ky}{dt^k}(t)=\sum_{k=0}^Mb_k\frac{d^kx}{dt^k}(t)$



### Additional Notes
![[signals-and-systems-additional-notes-1.png]]
