import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('upload')
export class UploadController {
    @Post()
    @UseInterceptors(FileInterceptor('arquivo'))
    upload(@Body() arquivo: Express.Multer.File) {
        return {
            estado: 'ok',
            dados: {
                nome: arquivo.originalname,
                tamanho: arquivo.size,
            },
        };
    }
}
