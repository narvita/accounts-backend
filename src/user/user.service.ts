import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findAll() {
    const users = this.userModel.find();
    // console.log(users, 'users');
    return users;
  }

  async findOne(id: number): Promise<CreateUserDto> {
    console.log('hesa', id);
    const user = await this.userModel
      .findOne({ _id: new mongoose.Types.ObjectId('630357351374044f27a81779') })
      .exec();
    console.log(user, 'user');
    return user[0];
  }
}
