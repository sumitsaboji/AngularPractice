import {Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name:'Multiplier'
})

export class MultiplierPipe implements PipeTransform
{
    transform(value: number, multiply: number,test:number): number { 
       debugger;
        return  value * multiply;
     } 
}