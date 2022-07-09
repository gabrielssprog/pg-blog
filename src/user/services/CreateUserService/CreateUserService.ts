import { User } from "../../User";
import { UserRepository } from "../../UserRepository/UserRepository";

export class CreateUserService {
  constructor(
    private userRepository: UserRepository
  ) { }

  async execute(user: Omit<User, 'id'>) {
    return await this.userRepository.create(user)
  }
}