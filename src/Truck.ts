/*
* This program is a vehicle class.
*
* @author  Malcolm Tompkins
* @version 1.0
* @since   2022-01-16
*/

import { Vehicle } from "./Vehicle"

export class Truck extends Vehicle {
  private _licensePlate: string

  private _numberOfTires = 8

  constructor (inicialColour: string, topspeed: number,
    inicialPlate: string) {
    super(inicialColour, topspeed)
    this._licensePlate = inicialPlate
  }

  public get licensePlate () {
    return this._licensePlate
  }

  public set licensePlate (param: string) {
    this._licensePlate = param
  }

  public applyAir (airPressure: number) {
    this.speed = this.speed - airPressure
  }

  public getNumberOfTires() {
    return this._numberOfTires
  }
}
