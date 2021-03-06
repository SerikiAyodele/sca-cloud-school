import { ApiModelProperty } from '@nestjs/swagger';

export class ReadProductDTO {
  @ApiModelProperty()
  readonly product_id: string;

  constructor(product_id: string) {
    this.product_id = product_id;
  }
}
