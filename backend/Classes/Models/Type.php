<?php

namespace Classes\Models;

class Type extends Model
{

    protected $table = 'types';
    protected $fillable = ['name', 'tax'];
}
