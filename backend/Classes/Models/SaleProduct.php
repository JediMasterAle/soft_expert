<?php

namespace Classes\Models;

class SaleProduct extends Model
{

    protected $table = 'products_has_sales';
    protected $fillable = ['products_id', 'sales_id', 'qty', 'unit_value', 'unit_value_without_tax'];
}
