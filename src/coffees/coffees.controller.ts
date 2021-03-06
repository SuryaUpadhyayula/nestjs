import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Res, Patch, Delete, Query } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {

        // privare declares and initializes and can be used only in this class
    constructor(private readonly coffeesService: CoffeesService) {}

    // ********** using response object
    // @Get()
    // findAll(@Res() response) {
    //     // do-not-use as this code makes our app platform dependent as it is directly accessing the response object.
    //     response.status(200).send('This action returns all coffees using response object');
    // }

    // ********** using no params
    // @Get()
    // findAll() {
    //     return 'This action returns all coffees';
    // }

    // ********** using queryparams
    @Get()
    findAll(@Query() paginationQuery) {
        // const {limit, offset } = paginationQuery;
        // return `This action returns all coffees, Limit: ${limit}, offset: ${offset}`;
        return this.coffeesService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string ) {
        // return `This action returns #${id} coffee`;
        return this.coffeesService.findOne(id);
    }

    @Post()
    create(@Body() createCoffeeDto: CreateCoffeeDto) {
        // return body;
        return this.coffeesService.create(createCoffeeDto);
    }

    @Patch(':id')
    update(@Param('id') id: string, updateCoffeeDto: UpdateCoffeeDto) {
        // return `This action updates #${id} coffee`;
        return this.coffeesService.update(id,updateCoffeeDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        // return `This action removes #${id} coffee`;
        return this.coffeesService.remove(id);
    }
 }
