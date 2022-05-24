import {Injectable} from '@nestjs/common';
import {Prisma, Thing} from '@prisma/client';
import {CreateThingDto} from './dto/create-thing.dto';
import {UpdateThingDto} from './dto/update-thing.dto';
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class ThingsService {

    constructor(private prisma: PrismaService) {
    }

    async create(data: CreateThingDto): Promise<Thing> {

        function to(data: CreateThingDto): Prisma.ThingCreateInput {
            return {
                name: data.name
            }
        }

        return this.prisma.thing.create({
            data: to(data)
        });
    }

    async findAll(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.ThingWhereUniqueInput;
        where?: Prisma.ThingWhereInput;
        orderBy?: Prisma.ThingOrderByWithRelationInput;
    }): Promise<Thing[]> {
        const {skip, take, cursor, where, orderBy} = params;
        return this.prisma.thing.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }

    findOne(userWhereUniqueInput: Prisma.ThingWhereUniqueInput,
    ) {
        return this.prisma.thing.findUnique({
            where: userWhereUniqueInput,
        });
    }

    update(params: {
        where: Prisma.ThingWhereUniqueInput;
        data: Prisma.ThingUpdateInput;
    }) {
        const {data, where} = params;
        return this.prisma.thing.update({
            data,
            where,
        });
    }

    remove(where: Prisma.ThingWhereUniqueInput): Promise<Thing> {
        return this.prisma.thing.delete({
            where
        });
    }
}
