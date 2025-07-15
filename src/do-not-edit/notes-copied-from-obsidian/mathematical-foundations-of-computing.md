# Mathematical Foundations of Computing
* Generalized pigeonhole principle
	* For p pigeons and h holes,
		* some hole will have at least $\lceil {p\over h} \rceil$ pigeons in it
		* some hole will have at most $\lfloor{p \over h}\rfloor$ pigeons in it
* The "composition of f and g" is $g\circ f$ 
* Translating first-order logic to English in a proof:
	![[cs103-proof-table.jpg|400]]
* Functions
	* domain - function defined for every element of domain
	* codomain - output is always in codomain. Not all els in codomain must have an associated output of the f tho
	  ![[domain-codomain.jpg|140]]
	* $f : A\to B$ means f has domain A and codomain B
	* Involution: a function f is an involution if $\forall a\in A.f(f(a))=a$
		* Layman: apply twice gives same thing back. f is an involution if f(f(x))=x
	* Surjective: $\forall b\in B.\exists a\in A.(f(a)=b)$
		* Layman: all outputs have an input that points to it
	* Injective: $\forall a_1\in A.\forall a_2\in A.(a_1\not=a_2\to f(a_1)\not=f(a_2))$
		* Equivalently $\forall a_1\in A.\forall a_2\in A.(f(a_1)=f(a_2)\to a_1=a_2)$
		* Layman: one-to-one function. No no output maps to two inputs. Every output maps to 1 or 0 inputs.
			* one-to-one function (not every codomain element needs to be used)
			* horizontal line test in y=f(x) tells you if a function is injective
	* bijective - injective and surjective, one-to-one correspondence (ever codomain element used)
	* Function needs to be:
		1. $\forall a\in A.\exists b\in B.(f(a)=b)$ - total
			* Defined on every element in domain, as opposed to partial, which means that f(a) is undefined for some a in the domain
				* Partial - $\exists a\in A.f(a)\text{ is undefined}$
		2. $\forall a_1\in A.\forall a_2\in A.(a_1=a_2\to f(a_1)=f(a_2))$ - deterministic (same input always produces same output)
* Proof explains why theorem is true
  Disproof explains why claim is false (such as through a counterexample)
* Transformations
	* $\underline{\lnot\forall x.A}$
	  $\exists x.\lnot A$
	* $\underline{\lnot\exists x.A}$
	  $\forall x.\lnot A$
	* $\underline{ \lnot (A\land B)} - \text{2 ways}$
	  $\lnot A\lor \lnot B$ (De Morgan's Law)
	  $A\to\lnot B$
	* $\underline{\lnot(A\lor B)}$
	  $\lnot A\land \lnot B$ (De Morgan's Law)
	* $\underline{\lnot(A\to B)}$
	  $A\land\lnot B$
	* $\underline{\lnot(A\leftrightarrow B)}$
	  $\lnot A\leftrightarrow B$
	  $A\leftrightarrow\lnot B$
	* Mnemonics
		* "Pushing" $\lnot$ inward and flipping between operators (or vice versa):
			* $\land$ to $\to$
			* $\forall$ to $\exists$
		* De Morgan's Law is like distributing the $\lnot$ and flipping the operator (from $\land$ to $\lor$ or vice versa)
		* When applying $\lnot$ to the biconditional ($\leftrightarrow$) negate either side and keep the operator same
	* Others
		* $p\to b\to r$ same as $p\land q\to r$
* The Aristotelian Forms
	* All As are Bs: $\forall x.(A(x) \to B(x))$
	* No As are Bs: $\forall x.(A(x)\to \lnot B(x))$
	* Some As are Bs: $\exists x.(A(x) \land B(x))$
	* Some As aren't Bs: $\exists x.(A(x)\land\lnot B(x))$
* First-order logic
	* Terms
		* Functions - object → object
		  Predicate - object → bool
		* Connective - bool(s) → bool
			* conjunction - $\land$ (binary)
			* disjunction - $\lor$
			* implication - $\to$
			* biconditional - $\leftrightarrow$
			* negation - $\lnot$ (unary)
			* truth - $\top$ (nullary)
			* falsity - $\bot$
		* Quantifier - bool → bool
	* Examples
		* = operates on objects, $\leftrightarrow$ operates on predicates
		* Some P is a Q translates to $\exists x.(P(x) \land Q(x))$
		* All Ps are Qs translates to $\forall x.(P(x)\to Q(x))$
	* Try to pair $\exists$ with $\land$ and $\forall$ with $\to$
* Precedence (highest to lowest)
	* $\lnot$
	* $\forall$ and $\exists$
	* $\land$ (and before or)
	* $\lor$
	* $\to$
		* $\to$ is right-associative so $a\to b\to c$ is $a \to (b\to c)$. Most operators like $\land$ are left-associative.
	* $\leftrightarrow$
* Propositional logic
	* Propositional variable
	* Propositional connectives
* $p \to q$ is the same as $\lnot(p \land \lnot q)$
	* only false when p is true and q is false
![[implies-equivalence.jpg]]
![[de-morgans-laws.jpg]]
* Universal statement - for all x, some \[property] holds for x (mn works on x **universally**)
* Existential statement - there is some x where \[property] holds for x (mn some x **exists** for it to work)
* Proof types
	* Implication: If antecedent, then consequent.
		* Assume step: assume the antecedent is true
		* Want-to-show steps
		* demonstrate that the consequent is true
		* Reiterate what you wanted to show$\square$


### Derivations
![[7.7.25-proposition-equality.jpg]]

