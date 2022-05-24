import { PartialType } from '@nestjs/mapped-types';
import { CreateThingDto } from './create-thing.dto';

export class UpdateThingDto extends PartialType(CreateThingDto) {}
