/*
 * This program is a microwave simulator.
 *
 * By: Mohamad Tanbari
 * Version: 1.0
 * Since: 2024-9-27
 */

import { createPrompt } from 'bun-promptx'

// Variables
const foodList = {
  // Item: time to heat
  sub: 60,
  pizza: 45,
  soup: 105
}
const foodListKeys = Object.keys(foodList)
const foodListLength = foodListKeys.length

const twoItemBonus = 1.5
const threeItemBonus = 2

let foodString = ''
// Grab food items for the input prompt
for (let counter = 0; counter < foodListLength; counter++) {
  if (counter === foodListLength - 1) {
    foodString += `or ${foodListKeys[counter]}`
  } else {
    foodString += `${foodListKeys[counter]}, `
  }
}

// Get input
const foodItem = createPrompt(`Are you heating ${foodString}?: `)
const foodItemValue = foodItem.value

// Verify input
if (foodItemValue in foodList) {
// Get amount of food being heated
  const amountOfFoodString = createPrompt(
    'How many items are you heating? (max: 3): '
  )
  // Verify input
  const amountOfFood = parseInt(amountOfFoodString.value)

  if (amountOfFood === isNaN()) {
    console.log('Invalid input.')
  } else if (amountOfFood > 3) {
    console.log('You cannot heat more than 3 food items at once.')
  } else {
    // Variable to apply multipliers
    let timeToHeatFor

    // Calculate the amount of time the food will take
    if (amountOfFood === 2) {
      timeToHeatFor = foodList[foodItemValue] * twoItemBonus
    } else if (amountOfFood === 3) {
      timeToHeatFor = foodList[foodItemValue] * threeItemBonus
    }

    // Format time
    const minutes = Math.floor(timeToHeatFor / 60)
    const seconds = timeToHeatFor % 60
    const formattedTime = `${minutes > 0 ? `${minutes} minute(s)` : ''}
                           ${minutes > 0 && seconds > 0 ? ' and ' : ''}
                           ${seconds > 0 ? `${seconds} seconds` : ''}`

    // Output
    console.log(`The total heat time is ${formattedTime}.`)
  }
} else {
  console.log('Invalid Input.')
}

// Done
console.log('\nDone.')
