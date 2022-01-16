/*
* This program is a vehicle class.
*
* @author  Malcolm Tompkins
* @version 1.0
* @since   2022-01-16
*/

import { Vehicle } from "./Vehicle"

export class Bike extends Vehicle {
  private _cadense: number
  private _numberOfTires = 4

  constructor (initialColour: string, topSpeed: number) {
    super(initialColour, topSpeed)
    this._cadense = 0
  }

  public get cadense () {
    return this._cadense
  }

  public set cadense (param: number) {
    this._cadense = param
  }

  public accelerate (newSpeed: number) {
    super.accelerate(newSpeed)
  }

  public ringBell () {
    console.log('\nDing ding!\n')
  }

  public status () {
    super.status()
    console.log('Cadense: ' + this._cadense)
  }

  public getNumberOfTires() {
    return this._numberOfTires  
  }
}
