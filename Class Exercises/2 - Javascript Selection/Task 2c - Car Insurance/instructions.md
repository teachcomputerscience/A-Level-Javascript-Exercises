# Exercise

Write a program to calculate car insurance premiums based on the following criteria:

1. Base premium is £500
2. Age adjustments:
   - Under 25: Add 50% to base premium
   - 25-40: No change to base premium
   - Over 40: Subtract 15% from base premium

3. No Claims Bonus adjustments:
   - 0 years: No discount
   - 1-2 years: 10% discount
   - 3-5 years: 25% discount
   - Over 5 years: 35% discount

4. Previous Claims:
   - Each previous claim adds 20% to the final premium

The program should collect the driver's age, years of no claims bonus, and number of previous claims, then calculate and display the final premium.

TIPS!! (How this code works for reference)


Get the user’s details:
The code reads the driver’s age, how many years they haven’t made a claim (noClaims), and how many previous claims they’ve made.

Start with a base premium:
Everyone starts with a base price of £500.

Age adjustment:

If the driver is under 25, they pay 50% more.
Calculation: basepre = basepre + (basepre * 0.5)
Example: £500 + £250 = £750
If the driver is 40 or older, they pay 15% less.
Calculation: basepre = basepre - (basepre * 0.15)
Example: £500 - £75 = £425
If the driver is between 25 and 40, the price stays at £500.
No claims discount:

If the driver has 0 years of no claims, no discount.
1-2 years: 10% discount (disc = 0.10)
3-5 years: 25% discount (disc = 0.25)
More than 5 years: 35% discount (disc = 0.35)
Previous claims adjustment:

For each previous claim, add 20% of the (already adjusted) base premium.
Calculation: claimsAdj = basepre * 0.2 * PC
Example: If basepre is £750 and PC is 2, claimsAdj = £750 * 0.2 * 2 = £300
Total before discount:

Add the claims adjustment to the base premium.
Calculation: premiumBeforeDiscount = basepre + claimsAdj
Apply the no claims discount:

Subtract the discount from the total.
Calculation: finalPremium = premiumBeforeDiscount * (1 - disc)
Show the result:

The final premium is displayed to the user.
Summary:
The code starts with £500, changes it based on age, adds extra for previous claims, then gives a discount for safe driving years, and finally shows the price you need to p
