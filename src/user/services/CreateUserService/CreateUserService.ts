import { UserWithoutId } from "../../User";
import { UserRepository } from "../../UserRepository/UserRepository";

export class CreateUserService {
  constructor(
    private userRepository: UserRepository
  ) { }

  async execute(user: UserWithoutId) {
    return await this.userRepository.create(user)
  }
}