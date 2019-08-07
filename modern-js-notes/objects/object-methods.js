// object=methods.js
// Birchall 2019

// methods = inside an object instead of a key:value, its a key:function

let restaurant = {
    name: 'Jamie\'s Italian',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function(partySize) {
        // console.log(partySize)
        return (this.guestCapacity - this.guestCount) >= partySize
    },
    makeBooking: function(partySize) {
        if (this.checkAvailability(partySize)) {
            this.guestCount += partySize
            return true
        } else {
            console.log(`Sorry we are too full, we have ${this.guestCapacity - this.guestCount} spaces left for guests.`)
            return false
        }
    }
}

let status = restaurant.checkAvailability(5)
console.log(status)

let statusOfBooking = restaurant.makeBooking(45)
console.log(statusOfBooking)

let statusOfBooking2 = restaurant.makeBooking(70)
console.log(statusOfBooking2)