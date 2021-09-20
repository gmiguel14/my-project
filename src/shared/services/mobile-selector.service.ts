import { Injectable } from '@angular/core';
import {of, Observable} from 'rxjs';
import { Mobile } from '../types/types';

@Injectable({
  providedIn: 'root'
})

export class MobileSelectorService {
  constructor() {}

  getMobileList(): Observable<Mobile[]> {
    return of([
      {
        id: 1,
        name: 'Armor',
        image: 'armor.png',
        projectile_speed: 0.74,
        gravity: -73.5,
      },
      {
        id: 2,
        name: 'Mage',
        image: 'mage.png',
        projectile_speed: 0.78,
        gravity: 71.5,
      },
      {
        id: 3,
        name: 'Nak Machine',
        image: 'nak.png',
        projectile_speed: 0.99,
        gravity: -93.0,
      },
      {
        id: 4,
        name: 'Trico',
        image: 'trico.png',
        projectile_speed: 0.87,
        gravity: -84.0,
      },
      {
        id: 5,
        name: 'Big Foot',
        image: 'big-foot.png',
        projectile_speed: 0.74,
        gravity: -90.0,
      },
      {
        id: 6,
        name: 'Boomer',
        image: 'boomer.png',
        projectile_speed: 1.395,
        gravity: -62.5,
      },
      {
        id: 7,
        name: 'Raon',
        image: 'raon.png',
        projectile_speed: 0.827,
        gravity: -81.0,
      },
      {
        id: 8,
        name: 'Lightning',
        image: 'lightning.png',
        projectile_speed: 0.72,
        gravity: -65.0,
      },
      {
        id: 9,
        name: 'JD',
        image: 'jd.png',
        projectile_speed: 0.625,
        gravity: -62.5,
      },
      {
        id: 10,
        name: 'A. Sate',
        image: 'a-sate.png',
        projectile_speed: 0.765,
        gravity: -76.0,
      },
      {
        id: 11,
        name: 'Ice',
        image: 'ice.png',
        projectile_speed: 0.625,
        gravity: -62.5,
      },
      {
        id: 12,
        name: 'Turtle',
        image: 'turtle.png',
        projectile_speed: 0.74,
        gravity: -73.5,
      },
      {
        id: 13,
        name: 'Grub',
        image: 'grub.png',
        projectile_speed: 0.65,
        gravity: -61.0,
      },
      {
        id: 14,
        name: 'Kalsiddon',
        image: 'kalsidon.png',
        projectile_speed: 0.905,
        gravity: -88.5,
      },
      {
        id: 15,
        name: 'Aduka',
        image: 'aduka.png',
        projectile_speed: 0.695,
        gravity: -65.5,
      },
      {
        id: 16,
        name: 'JFrog',
        image: 'frog.png',
        projectile_speed: 0.67,
        gravity: -54.3,
      },
      {
        id: 17,
        name: 'Knight',
        image: 'knight.png',
        projectile_speed: 0.695,
        gravity: -65.5,
      },
      {
        id: 18,
        name: 'Dragon',
        image: 'dragon.png',
        projectile_speed: 0.67,
        gravity: -54.3,
      },
    ])
  }
}