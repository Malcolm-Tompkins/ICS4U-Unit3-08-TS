/*
* This program is a vehicle class.
*
* @author  Malcolm Tompkins
* @version 1.0
* @since   2022-01-16
*/

import { Truck } from './Truck'
import { Bike } from './Bike'

const bmx = new Bike('Red', 40)

console.log('Created Bmx bike.\nStatus:\n')
bmx.status()

console.log('\nAccelerating 1000 units:')
bmx.accelerate(1000)
bmx.status()

console.log('\nThe number of tires is (bike): ' + bmx.getNumberOfTires())

console.log('\nRing bell.')
bmx.ringBell()
const bigTruck = new Truck('Grey', 200, 'HGC-3456F')

console.log('Created a Truck.\nStatus:\n')
bigTruck.status()

console.log('\nAccelerating 1000 units: ')
bigTruck.accelerate(1000)
bigTruck.status()

console.log('\nThe number of tires is (truck): ' + bigTruck.getNumberOfTires())

console.log('\nDone.')
