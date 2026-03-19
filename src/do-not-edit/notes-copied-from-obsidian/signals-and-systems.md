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
		- Time-invariant iff t-shift then apply H is the same as apply H then t-shift. Time-variance means that it depends on absolute time.
			- t-shift then apply H: $H\{x(t-t_0)\}$
			- apply H then t-shift: $y(t-t_0)$
			- Strategy when checking if time-invariant: write $x'(t)=x(t-t_0)$ to apply $H\{x'(t)\}$ and first find $y(t)$ then t-shift by $t_0$
		- Time-variant - H applies a change to x(t) differently based on each absolute t
		- Common examples
			- Variant - depends on absolute time
				- $y(t)=x(ct)$
				- $y(t)=x(c)$
				- $y(t)=tx(t)$
			- Invariant
				- y(t)=x(t-5)
	* Linearity
		* Linear iff $H\{a_1x_1(t)+a_2x_2(t)\}==a_1H\{x_1(t)\}+a_2H\{x_2(t)\}$
	* Causality
		* Causal iff y\(t) dependent on only present and past values of x, that is $x(t')~~\forall ~t'\le t$
	* Real
		* A real system maps real inputs to real outputs
- Singularity functions is either $\infty$ or has no derivative at a point
- Example signals
	- Impulse function $\delta(t)$
		- CT impulse function is also called the Dirac delta function (see [explanatory video here](https://youtu.be/znO9OqXJiDs))
		- Unit doublet function $\delta'(t)=\frac{d\delta}{dt}(t)$
	- Step function $u(t)$ is 1 if $t\geq0$ else 0
	- Ramp function $r(t)=\begin{cases} t&t\geq0\\0&\text{otherwise}\end{cases}$
	- Rectangular pulse $\Pi(t) = \begin{cases} 1 & |t|\leq\frac12\\0&\text{otherwise} \end{cases}$
- Example systems
	- Modulation
		- $\underbrace{y(t)}_{\text{modulated signal}}=\underbrace{x(t)}_{\text{message signal}}~~\underbrace{\cos(\omega_ct)}_{\text{carrier signal}}$
			- $\omega_c$ is the carrier frequency
	- High-pass and low-pass filters
		- DT
			- Difference equation: $y[n] = x[n]+ay[n-1]$
			- When $0\lt a\lt 1$, low-pass filter
			  When $a == 1$, running sum
			  When $a \gt 1$, compound interest
			  When $-1 \lt a \lt 0$, high-pass filter
			* Impulse response $h[n]=a^nu[n]$
				* deriv
				  ![[03.17.2026 screenshot 001084.png]]
				  end deriv
			- $\displaystyle y[n]=\sum_{k=-\infty}^n a^{n-k}x[k]$
				* deriv
				  ![[03.17.2026 screenshot 001083.png]]
				  end deriv
		- CT low-pass filter
			- Differential equation: $\tau y'(t) + y(t) = x(t)$
				- deriv
				  FP with hand-wavy diffeq
				  ![[02.12.2026 screenshot 000469.png]]
				  end deriv
			- $y(t)=\frac1{\tau}\int_{-\infty}^t e^{-\frac{t-t'}\tau} x(t') dt'$
			- Impulse response $h(t)=\frac1\tau e^{-\frac t\tau} u(t)$
				- deriv
				  ![[Pasted image 20260212163715.png]]
				  end deriv
			- Frequency response $H(j\omega)=\frac{1}{1+j\omega\tau}$
				- deriv
				  ![[02.06.2026 screenshot 000427.png]]
				  end deriv
				- -3 dB is when the power is down by 1/2 which would correspond to $|H(j\omega)|$ being $\frac1{\sqrt{2}}$ which would correspond to $1=\omega\tau$ or $\omega=\frac1\tau$ so cutoff frequency $\omega_c=\frac1\tau$
		- CT high-pass filter
			- Differential equation: $\tau y'+y=\tau x'$
				- deriv
				  ![[02.13.2026 screenshot 000477.png]]
				  end deriv
			- $\displaystyle y(t)=\frac1{\tau}\int_{-\infty}^t e^{-\frac{t-t'}\tau} \textcolor{blue}{x'(t')} dt'$
			- Impulse response $h(t)=\delta(t)-\frac1\tau e^{-\frac t\tau}u(t)$
			- Frequency response $H(j\omega)=\frac{j\omega\tau}{1+j\omega\tau}$
				- deriv
				  ![[02.13.2026 screenshot 000479.png]]
				  end deriv
	- Squarer
		- DT
			- $y[n]=x^2[n]$
		- CT
			- $y(t) = x^2(t)$
- Initial rest - $y[n]=0$ until $x[n]$ is non-zero
- Fundamental frequency $\omega_0$
  Frequency $\omega=k\omega_0$
	- $\omega_k$ is a harmonic when $k$ is an integer
		- $\omega_1$ is the first harmonic (the fundamental frequency)
		- $\omega_2$ is the second harmonic - twice the fundamental frequency
- Convolutions
	- Convolving two signals—a(t) and b(t)—returns another signal c(t)
	- CT $c(t) = a(t) * b(t) = \int_{k=-\infty}^{\infty} a(k)b(t-k)dk$
	- DT $c[n] = a[n] * b[n] = \sum_{k=-\infty}^{\infty} a[k]b[n-k]$
	- Convolution is linear
		- deriv
		  To show that convolution is linear, we need to show that it satisfies additivity and homogeneity
		  ![[03.17.2026 screenshot 001088.png]]
		  end deriv
	- Convolution is commutative
		- deriv
		  ![[03.17.2026 screenshot 001089.png]]
		  end deriv
	- Given an LTI system H
		- Impulse response $h(t)\triangleq H\{\delta(t)\}$
			- $y[n] = x[n] * h[n]$
				* deriv
				  ![[03.17.2026 screenshot 001078.png]]
				  end deriv
		- Step response $s(t)\triangleq H\{u(t)\}$
	- How to calculate convolution
		- Method 1: Flip and drag
			- Plot $h[k]$
			- Plot $x[n-k]$ (which is $x[-(k-n)]$, a horizontal flip and then transform right by n)
			- For each fixed value of n, take each k and multiply the two graphs, adding up all these terms to get $y[n]$
		- Method 2: Express rectangles as singularity functions and apply special functions
		- Method 3: symbolically
	- Useful examples
		- $\displaystyle x[n] * u[n] = \sum_{k=-\infty}^n x[k]$ running sum
			- convolving with the step function gives a running sum
			- deriv
			  ![[03.17.2026 screenshot 001090.png]]
			  end deriv
		- $x[n] * \delta[n] = x[n]$ identity
			- convolving with the impulse function returns the identity
			- deriv
			  ![[03.17.2026 screenshot 001091.png]]
			  end deriv
		- $x[n] * \delta[n-n_0] = x[n-n_0]$ delay
			- deriv
			  ![[03.17.2026 screenshot 001092.png]]
			  end deriv
		- $x(t)*\delta'(t)=x'(t)$ derivative
			- deriv
			  ![[03.17.2026 screenshot 001094.png]]
			  end deriv
	- $\int_{-\infty}^\infty y(t)dt = \int_{-\infty}^\infty x(t)dt \int_{-\infty}^\infty h(t)dt$
		- deriv
		  ![[03.17.2026 screenshot 001096.png]]
		  end deriv
		- This is a useful property to check that you did your convolution correctly
	- Frequency response $H(j\omega)=\displaystyle\int_{-\infty}^\infty h(t)e^{-j\omega t}dt$
		- deriv
		  ![[02.02.2026 screenshot 000386.png]]
		  end deriv
		* AKA transfer function $H(s)=\int_{-\infty}^\infty h(t')e^{-st'}dt'$
		* If $x(t)=e^{st}$ then $y(t)=H(s)e^{st}$
			* deriv
			  ![[02.06.2026 screenshot 000424.png]]
			  end deriv
		- How to calculate: through the equation given above with the impulse response or by substituting in $y(t)$ as $H(s)e^{st}$ and $x(t)$ with $e^{st}$
		- Properties
			- If impulse response $h(t)$ is real,
				- $H^*(j\omega)=H(-j\omega)$
					- deriv
					  ![[02.06.2026 screenshot 000425.png]]
					  end deriv
				- Any real $x(t)$ will yield a real $y(t)$ <!-- txtbk p97 -->
				- 
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

<!-- chapter 3 -->
- Signal transforms (frequency-domain transforms)
	- Fourier series - for periodic signals (have power)
		- Fourier series - CTFS
		- Discrete Fourier series - DTFS
	- Fourier transform - for aperiodic signals (have energy)
		- Fourier transform - CTFT
		- Discrete Fourier transform - DTFT
	- Laplace transform - CT
	- Z-Transform - DT
- Fourier series
	- Basis function $\phi_k(t) = e^{jk\omega_0t}$
	- Synthesis - representing a signal $x(t)$ by a Fourier series $\hat x(t)$ 
		- $\displaystyle \hat x(t) = \sum_{k=-\infty}^{\infty} a_k e^{jk\omega_0 t}= \sum_{k=-\infty}^{\infty} a_k \phi_k(t)$
	- Analysis - finding the Fourier series coefficients $a_k$ to represent a signal $x(t)$
		- $\displaystyle a_k=\frac1{T_0} \int_{T_0} x(t') e^{-jk\omega_0t'}dt'=\frac1{T_0} \int_{T_0} x(t') \phi_k^*(t')dt'$
		- deriv
		  ![[fourier-series-synthesis-and-analysis-1.png]]
		  ![[fourier-series-synthesis-and-analysis-2.png]]
		  end deriv
		* mn $a_kT_0$ is the product of inner product of $e^{jk\omega_0t}$ and $\hat x(t)$ (approximation of x(t) with linear combo of exponentials) over one period, which is the RHS.
		  mn $\int_{T_0} \hat x(t') e^{-jk\omega_0t'}dt'=\int_{T_0} x(t') e^{-jk\omega_0t'}dt'$
		  LHS yields $\displaystyle \int_{T_0} \sum_{k'=-\infty}^{\infty} a_ke^{jk'\omega_0} e^{-jk\omega_0t'}dt'=a_kT_0$		  
		- Examples
			- Pulse train: $a_k=\frac{\omega_0T_1}\pi \operatorname{sinc}(\frac{k\omega_0T_1}\pi)$
				- deriv
				  ![[02.06.2026 screenshot 000421.png]]
				  end deriv
			* DT pulse train $a_k=\frac1N\frac{\sin(k2\pi (N_1+\frac12)/N)}{\sin(k\pi /N)}$ for period $N$ and pulse width $2N_1$
				* deriv
				  ![[02.19.2026 screenshot 000539.png]]
				  end deriv
	* DT version
		- Basis function $\phi_k[n] = e^{ jk\frac{2\pi}{N} n}$
		- Synthesis $\displaystyle \hat x[n]=\sum_{k=\langle N\rangle}a_ke^{ jk\frac{2\pi}{N} n}$
		- Analysis $\displaystyle a_k=\frac1N\sum_{n=\langle N\rangle}x[n]e^{-jk\frac{2\pi}Nn}$
		- Fundamental frequency $\Omega_0=\frac{2\pi}N$
	* $\operatorname{sinc}(x)=\frac{\sin \pi x}{\pi x}$
	* With LTI system H
		* If $y(t)=H\{x(t)\}=H(j\omega)x(t)$ and $x(t)\stackrel{\rm FS}\leftrightarrow a_k$ then $y(t)\stackrel{\rm FS}\leftrightarrow a_kH(j\omega)$ due to linearity of H
	* Properties given $x(t)\stackrel {\rm FS}\leftrightarrow a_k$ and $y(t)\stackrel{\rm FS}\leftrightarrow b_k$
		* Both
			- Linearity $Ax(t)+By(t)\leftrightarrow Aa_k+Bb_k$
				- deriv
				  ![[02.20.2026 screenshot 000548.png]]
				  end deriv
			- Power $\displaystyle P=\frac1{T_0}\int_{T_0}|x(t)|^2dt=\sum_{k=-\infty}^\infty|a_k|^2$
				* deriv
				  From Parseval's identity
				  ![[02.12.2026 screenshot 000474.png]]
				  end deriv
			* If $x(t)$ is real, $a_{-k}=a_{k}^*$
				* deriv
				  ![[02.06.2026 screenshot 000426.png]]
				  end deriv
			* If $x(t)$ is even and real, $a_k$ is even and real. If $x(t)$ is odd and real, $a_k$ is odd and imaginary
				* deriv
				  ![[02.06.2026 screenshot 000423.png]]
				  end deriv
			- T-shift delay: $x(t-t_0)\leftrightarrow a_k\textcolor{blue}{e^{-jk\omega_0t_0}}$ if $x(t)\leftrightarrow a_k$
				- deriv
				  ![[02.06.2026 screenshot 000428.png]]
				  end deriv
		* CTFS
			* Parseval's identity $\displaystyle \langle x(t),y(t)\rangle = \int_{T_0} x(t)y^*(t)dt=T_0\sum_{k=-\infty}^\infty a_kb^*_k$ - relates the inner product of two signals to their FS coefficients
				* deriv
				  The first and second parts of the equation are from the definition of inner product. To get the third part of the equation, expand the Fourier series
				  ![[02.12.2026 screenshot 000472.png]]
				  ![[02.12.2026 screenshot 000473.png]]
				  end deriv
- Group delay $-\frac{d\angle H(j\omega)}{d\omega}$ - how delayed (phase-shifted) the components are based on their frequency
- Continuous-time Fourier transform (CTFT)
	- CTFT $\displaystyle X(j\omega)=\int_{-\infty}^\infty x(t) e^{-j\omega t}dt$
		- AKA analysis equation ∵ analysis is extracting coeffs $\displaystyle X(j\omega)$
		- $a_k=\frac1{T_0}X(jk\omega_0)$
			- where $X(j\omega)$ is for aperiodic signal version (one period) and $a_k$ is for periodic signal (CTFS coeff)
	- Inverse CTFT $\displaystyle x(t)=\frac{1}{2\pi} \int_{-\infty}^\infty X(j\omega) e^{j\omega t}d\omega$
		- deriv
		  ![[02.20.2026 screenshot 000549.png]]
		  end deriv
		- AKA CTFT synthesis equation ∵ synthesis is synthesizing signal from coeffs
		- mn synthesis has +$j\omega t$ because synthesis is about creating (positive) whereas analysis is about taking apart (negative) so it has a -$j\omega t$
		* This means that for frequency response $H(j\omega)$, $\displaystyle H\{x(t)\}=\frac{1}{2\pi} \int_{-\infty}^\infty X(j\omega) H(j\omega) e^{j\omega t}d\omega$
		  $\displaystyle =\frac{1}{2\pi} \int_{-\infty}^\infty |X(j\omega)|e^{\langle X(j\omega)} |H(j\omega)|e^{\langle H(j\omega)}  e^{j\omega t}d\omega$
		  $\displaystyle =\frac{1}{2\pi} \int_{-\infty}^\infty |X(j\omega)H(j\omega)|e^{\langle X(j\omega)+\langle H(j\omega)} e^{j\omega t}d\omega$
		  so the phase distortion $\angle H(j\omega)$ tells you how much the frequencies are delayed
	- Notation 
		- CTFT operator $\operatorname F$: $F[x(t)]=X(j\omega)$ and $F^{-1}[X(j\omega)] = x(t)$
		- CTFT pair: $x(t) \stackrel {F}\leftrightarrow X(j\omega)$
	- Eigenfunction of CT LTI system is $e^{jk\omega_0t}$
		- deriv
		  ![[03.17.2026 screenshot 001114.png]]
		  end deriv
	- $Y(j\omega)=X(j\omega)H(j\omega)$
		- deriv
		  ![[03.17.2026 screenshot 001115.png]]
		  end deriv
	- If the Dirichlet conditions (below) are satisfied, then synthesized signal $\hat x(t)=x(t)$ except near $t$ when $x(t)$ has discontinuities and the energy difference between them vanishes: $\int_{-\infty}^\infty |x(t)-\hat x(t)|^2 dt=0$
		- $x(t)$ is absolutely integrable $\int_{-\infty}^\infty |x(t)|dt <\infty$
		- $x(t$) has a finite number of local minima and maxima in a finite interval
		- $x(t)$ has a finite number of discontinuities in a finite interval
		- $x(t)$'s discontinuities are all finite
	- Examples
		- $F\{ \Pi(\frac t {2T_1}) \} = 2T_1\operatorname{sinc} \frac{\omega T_1}\pi$
			- deriv
			  ![[02.20.2026 screenshot 000547.png]]
			  end deriv
		- $F\{1\}=2\pi\delta(\omega)$
			- deriv
			  ![[02.20.2026 screenshot 000552.png]]
			  ![[02.20.2026 screenshot 000553.png]]
			  end deriv
		- $F\{\delta(t)\} = 1$
			- deriv
			  ![[02.20.2026 screenshot 000551.png]]
			  end deriv
		- $F\{\frac W \pi \operatorname{sinc} (\frac{Wt}\pi)\}=\Pi(\frac \omega {2W})$
			- deriv
			  ![[02.20.2026 screenshot 000555.png]]
			  end deriv
		- $F\{e^{j\omega_0t}\}=2\pi\delta(\omega-\omega_0)$
			- deriv
			  ![[02.20.2026 screenshot 000556.png]]
			  end deriv
		* From CTFS: $\displaystyle F\{x(t)\}=F\left\{\sum_{k=-\infty}^\infty a_k e^{jk\omega_0 t}\right\}=2\pi\sum_{k=-\infty}^\infty a_k\delta(\omega-k\omega_0)$
			* deriv
			  ![[02.20.2026 screenshot 000558.png]]
			  end deriv
		* Impulse train: $\displaystyle F\left\{\sum_{n=-\infty}^\infty\delta(t-nT_0)\right\}=\frac{2\pi}{T_0}\sum_{k=-\infty}^\infty\delta(\omega-k\omega_0)$
			* deriv
			  ![[02.20.2026 screenshot 000557.png]]
			  end deriv
		- $F\{u(t)\}=\frac1{j\omega}+\pi\delta(\omega)$
			- deriv
			  ![[02.21.2026 screenshot 000568.png]]
			  end deriv
		- $F\{\cos(\omega_0 t)\} = \pi(\delta(\omega-\omega_0)+\delta(\omega+\omega_0))$
			- deriv
			  ![[02.21.2026 screenshot 000575.png]]
			  end deriv
		- $F\{\sin(\omega_0t)\}=\frac{\pi}j(\delta(\omega-\omega_0)-\delta(\omega+\omega_0))$
			- deriv
			  ![[02.21.2026 screenshot 000576.png]]
			  end deriv
		- $F\{\operatorname{sgn}(t)\}=\frac2{j\omega}$
	- Properties
		- Linearity: $Ax(t)+By(t)\overset F\leftrightarrow AX(j\omega)+BY(j\omega)$
			- deriv
			  ![[02.21.2026 screenshot 000563.png]]
			  end deriv
		- Time scaling: $x(at) \overset F \leftrightarrow \frac1{|a|}X(j\frac\omega a)$
			- deriv
			  ![[02.21.2026 screenshot 000562.png]]
			  end deriv
			- Corollary: $F\{x(-t)\} = X(-j\omega)$
				- deriv
				  ![[02.21.2026 screenshot 000561.png]]
				  end deriv
		- Time shift $F\{x(t-t_0)\}=F\{x(t)\}e^{-j\omega t_0}$
			- deriv
			  ![[02.20.2026 screenshot 000559.png]]
			  end deriv
		- $F\{x^*(t)\}=X^*(-j\omega)$
			- deriv
			  ![[02.20.2026 screenshot 000560 1.png]]
			  end deriv
			- Corollary: if a signal x(t) is real, its CTFT has conjugate symmetry
		- If $x(t)$ is real and even, $X(j\omega)$ is real and even
		  If $x(t)$ is real and odd, $X(j\omega)$ is imaginary and odd
			- deriv
			  ![[02.21.2026 screenshot 000564.png]]
			  end deriv
		- $F\{\frac{dx}{dt}\}=j\omega X(j\omega)$ (differentiation)
			- deriv
			  ![[02.21.2026 screenshot 000566.png]]
			  end deriv
		- $F\{x(t)e^{j\omega_0t}\}=X(j(\omega-\omega_0))$ (frequency shifting)
			- deriv
			  ![[02.21.2026 screenshot 000567.png]]
			  end deriv
		* $\displaystyle F\left\{ \int_{-\infty}^t x(t') dt' \right\}=\frac1{j\omega}X(j\omega)+\pi X(j0)\delta(\omega)$
		* $F\{tx(t)\}=j\frac{dX}{d\omega}(j\omega)$
			* deriv
			  ![[02.21.2026 screenshot 000568 1.png]]
			  end deriv
		* Parseval's identity: $\displaystyle \langle x(t),y(t)\rangle=\frac1{2\pi}\int_{-\infty}^\infty X(j\omega)Y^*(j\omega)d\omega$, which is $\displaystyle \int_{-\infty}^\infty x(t)y^*(t)dt$
			* deriv
			  ![[02.21.2026 screenshot 000570.png]]
			  end deriv
		- Energy of x(t) is $\displaystyle \frac1{2\pi}\int_{-\infty}^\infty |X(j\omega)|^2 d\omega$, which is also $\int_{-\infty}^\infty |x(t)|^2 dt=\langle x(t), x(t) \rangle$
			- deriv
			  ![[02.21.2026 screenshot 000572.png]]
			  end deriv
		- $F\{x(t)*y(t)\}=X(j\omega)Y(j\omega)$
			- deriv
			  ![[02.21.2026 screenshot 000571.png]]
			  end deriv
		- $\displaystyle F\{x(t)y(t)\}=\frac1{2\pi}X(j\omega)*Y(j\omega)$
			- deriv
			  ![[03.17.2026 screenshot 001099.png]]
			  end deriv
* DTFS
	* $\displaystyle X(e^{j\Omega})=\sum_{n=-\infty}^\infty x[n]e^{-j\Omega n}$ - analysis
		* $a_k=\frac1NX(e^{jk\Omega_0})$
	* $\displaystyle x[n] = \sum_{k=\langle N \rangle} a_k e^{jk\Omega_0 n} \overset{F}{\leftrightarrow} X(e^{j\Omega}) = 2\pi \sum_{k=-\infty}^{\infty} a_k \delta(\Omega - k\Omega_0)$
	* Eigenfunction of DT LTI system is $z^n$. When $z=e^{j\Omega}$, we can use $H\{e^{j\Omega}\}=e^{j\Omega n}$
		* deriv
		  ![[03.17.2026 screenshot 001116.png]]
		  end deriv
	* $Y(j\omega)=X(j\Omega)H(j\Omega)$
		* deriv
		  ![[03.17.2026 screenshot 001117.png]]
		  end deriv
- DTFT
	- ![[03.06.2026 screenshot 000985.png]]


### Additional Notes
- Conjugate symmetry: $f(x)=f(-x)^*$ means $f$ has conjugate symmetry
* Helpful math
	- $e^{j\theta}+e^{-j\theta}=2\cos\theta$
	- $e^{j\theta}-e^{-j\theta}=2j\sin\theta$
	- deriv
	  ![[01.30.2026 screenshot 000358.png]]
	  end deriv
	* Conjugation distributes: $(ab)^*=a^*b^*$
		* deriv
			  ![[02.06.2026 screenshot 000422.png]]
			  end deriv
	* Inner product $\langle x(t), y(t) \rangle \stackrel\Delta= \int_{T_0} x(t)y^*(t)dt$
		* CT version of dot product (DT)
	* $\displaystyle \int_{-T}^T e^{j\omega t}dt = 2T\operatorname{sinc}\frac{\omega T}\pi$
		* deriv
		  ![[02.20.2026 screenshot 000550.png]]
		  end deriv


![[signals-and-systems-additional-notes-1.png]]
