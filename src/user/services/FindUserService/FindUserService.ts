import { PartialUser } from "../../User";
import { UserRepository } from "../../UserRepository/UserRepository";

export class FindUserService {
  constructor(
    private userRepository: UserRepository
  ) { }

  async execute(where: PartialUser) {
    const user = await this.userRepository.findOne(where)

    return user
  }
}