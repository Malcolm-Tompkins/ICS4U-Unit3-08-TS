/*
* This program is a vehicle class.
*
* @author  Malcolm Tompkins
* @version 1.0
* @since   2022-01-16
*/

export class Vehicle {
  // this is a  class.
  protected _speed: number
  protected _maxSpeed: number
  private _colour: string

  constructor (initialColour: string, topspeed: number) {
    this._colour = initialColour
    this._maxSpeed = topspeed
    this._speed = 0
  }

  public get speed () {
    return this._speed
  }

  public get maxSpeed () {
    return this._maxSpeed
  }

  public get colour () {
    return this._colour
  }

  public set speed (param: number) {
    this._speed = param
  }

  public set colour (param: string) {
    this._colour = param
  }

  public status () {
    console.log('Speed: ' + this._speed + '\nMaxSpeed: ' + this._maxSpeed +
                    '\nColour: ' + this._colour)
  }

  public accelerate (newSpeed: number) {
    this._speed = newSpeed
    if (this._speed > this._maxSpeed) {
      this._speed = this._maxSpeed
    }
  }

  public break (breakSpeed: number) {
    this._speed = this._speed - breakSpeed
    if (this._speed < 0) {
      this._speed = 0
    }
  }
}
