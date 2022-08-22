import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
export type UserDocument = User & Document;
@Schema()
export class User {
  @Prop()
  id: number;

  @Prop()
  name: string;

  @Prop()
  owner: string;

  @Prop()
  createdDate: string;

  @Prop()
  updatedDate: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
