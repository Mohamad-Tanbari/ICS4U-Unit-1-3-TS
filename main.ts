/*
 * This program is a microwave simulator.
 *
 * @author Mohamad Tanbari
 * @version 1.0
 * @since 2024-9-27
 */

import { createPrompt } from 'bun-promptx'

// Variables
const foodList = {
  // Item: time to heat
  sub: 60,
  pizza: 45,
  soup: 105
}
const twoItemBonus = 1.5
const threeItemBonus = 2

// Get input
const foodItem = createPrompt('Are you heating sub, pizza or soup?:')
// Verify input
if (foodItem.value in foodList) {
// Get amount of food being heated
  const amountOfFoodString = createPrompt('How many items are you heating? (max: 3): ')
  // Verify input
  const amountOfFood = parseInt(amountOfFoodString.value)

  if (amountOfFood == NaN) {
    console.log('Invalid input.')
  } else if (amountOfFood > 3) {
    console.log('You cannot heat more than 3 food items at once.')
  } else {
    // Calculate the amount of time the food will take
    if (amountOfFood == 2) {
      timeInUse * twoItemBonus
    } else if (amountOfFood == 3) {
      timeInUse * threeItemBonus
    }

    // Format time
    const minutes = Math.floor(timeInUse / 60)
    const seconds = timeInUse % 60
    const formattedTime = `${minutes} minutes and ${seconds} seconds`

    // Output
    console.log(`The total heat time is ${formattedTime}.`)
  }
} else {
  console.log('Invalid Input.')
}

// Done
console.log('\nDone.')
