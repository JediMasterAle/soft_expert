<?php

namespace Classes\Models;

class Product extends Model
{

    protected $table = 'products';
    protected $fillable = ['name', 'code', 'value', 'types_id'];
}
