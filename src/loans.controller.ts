import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { LoansService } from './loans/loans.service';

@Controller('loans')
export class LoansController {
  constructor(private loansService: LoansService) {}

  @Post()
  createLoan(@Body() createLoanDto: any) {
    const risk = this.loansService.calculateLoanRisk(createLoanDto.userProfile);
    return `Loan created for ${createLoanDto.userId} with risk: ${risk}`;
  }

  @Get(':id')
  getLoanStatus(@Param('id') id: string) {
    return `Status of loan ${id}`;
  }
}
