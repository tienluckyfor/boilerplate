<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use TCG\Voyager\Traits\Resizable;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Album extends Model
{
    use Resizable;

    public function album_media(): HasMany
    {
        return $this->hasMany(AlbumMedia::class, 'album_id', 'id');
    }
}

