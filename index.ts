type Status = Exclude<UserStatusType, 'pending'> | 0 | 1
interface User {
  id: number,
  name: string,
  age?: number,
  email?: string,
  status?: Status
}

function getDescription(status: Status) {
  if (status === 'active' || status === 1) {
    return `Пользователь online`
  } else `Пользователь offline`
}

const first: User = {
  id: 1,
  name: 'Lexa',
  age: 18,
  email: "lexa@gmail.com"
}

const second: User = {
  id: 2,
  name: 'Max',
}

enum UserRole {
  Admin = "admin",
  User = "user",
  Guest = "guest"
}

interface Admin extends User {
  role: UserRole
}

const third: Admin = {
  id: 3,
  name: "Bela",
  role: UserRole.Admin
}

function greetUser(user: User) {
  const message = `Привет ${user.name}!`
  user.age ? message + ` Тебе ${user.age} лет.` : message
}

// enum Status {
//   Pending,
//   inProgress,
//   Done
// }

// const asd = Status["Pending"]

const UserStatus = {
  Active: "active",
  Inactive: "inactive",
  Pending: "pending"
} as const

type UserStatusType = (typeof UserStatus)[keyof typeof UserStatus]

class Car {
  mileage = 0

  constructor(
    readonly make: string,
    readonly model: string,
    readonly year: number
  ) {}

  drive = (distance: number): void => {
    this.mileage += distance
  }

  getDescription = (): string => {
    return `Машина: ${this.make}, модель: ${this.model}, год выпуска: ${this.year}, проехала: ${this.mileage}`
  }
}

const toyota = new Car('Toyota', 'ae86', 1986)
console.log(toyota)
toyota.drive(1000)
console.log(toyota.getDescription())


