---
title: Signals & Systemes
description:
---
- Signal - function dependent on 1+ arguments, usually describing a physical aspect of something
	- One-dimensional signal - 1 argument
	- Multi-dimensional signal - multiple arguments
	- DT signal - sequence
	- CT signal - waveform
- System - takes a signal and outputs a new signal
- Sampling rate 1/T
	- T is the sampling interval
- Properties of a signal
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
	- 

