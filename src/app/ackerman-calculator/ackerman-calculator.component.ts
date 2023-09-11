import { Component } from '@angular/core';

type PriceOffset = {
  offsetPercentage: number,
  offsetPrice: number
}

@Component({
  selector: 'app-ackerman-calculator',
  templateUrl: './ackerman-calculator.component.html',
  styleUrls: ['./ackerman-calculator.component.css']
})
export class AckermanCalculatorComponent
{

  readonly defaultTargetValue = 200;
  targetValue: number = 0;
  private _isSelling = false;
  priceOffsets: PriceOffset[];

  constructor()
  {
    this.setTargetValueToDefaultIfEmpty();
    this.priceOffsets = this.calculatePriceOffsets(this.targetValue)
  }

  setTargetValueToDefaultIfEmpty()
  {
    if (!this.targetValue) { this.targetValue = this.defaultTargetValue; }

  }

  toggleIsSelling()
  {
    this._isSelling = !this._isSelling
    this.priceOffsets = this.calculatePriceOffsets(this.targetValue)
  }
  isSelling() { return this._isSelling }
  isBuying() { return !this._isSelling }

  calculatePriceOffsets(targetPrice: number)
  {
    let priceOffsetPercentages = [65, 85, 95, 100]
    if (this.isSelling()) priceOffsetPercentages = priceOffsetPercentages.map(offset => 200 - offset)

    const priceOffsets: PriceOffset[] = []
    priceOffsetPercentages.forEach((priceOffsetPercentage) =>
    {
      priceOffsets.push({ offsetPercentage: priceOffsetPercentage, offsetPrice: targetPrice * priceOffsetPercentage / 100 })
    })

    return priceOffsets;
  }

  setTargetValue(valueStr: string)
  {
    const value = parseInt(valueStr);
    this.targetValue = value;
    this.priceOffsets = this.calculatePriceOffsets(value);
  }
}
