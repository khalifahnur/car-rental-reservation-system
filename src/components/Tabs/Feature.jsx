import React from 'react'
import Image from 'next/image'

const Feature = () => {
  return (

      <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center flex-col">
                      <Image
                        src={"/car-seat.png"}
                        alt="car seat"
                        width={40}
                        height={40}
                      />
                      <p className="text-lg">Seats</p>
                      <p className="text-lg">5 seater</p>
                    </div>
                    <div className="flex items-center flex-col ml-4">
                      <Image
                        src={"/steering-wheel.png"}
                        alt="steering wheel"
                        width={40}
                        height={40}
                      />
                      <p className="text-lg">Speed</p>
                      <p className="text-lg">12km/l</p>
                    </div>
                    <div className="flex items-center ml-4 flex-col">
                      <Image
                        src={"/speedometer.png"}
                        alt="speedometer"
                        width={40}
                        height={40}
                      />
                      <p className="text-lg">Transmission</p>
                      <p className="text-lg">Auto</p>
                    </div>
                  </div>
  )
}

export default Feature