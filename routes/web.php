<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Header');
})->name('home');

Route::get('/welcome', function () {
    return Inertia::render('Welcome');
})->name('welcome');

Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

Route::get('/projects', function () {
    return Inertia::render('Projects');
})->name('projects');

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');
