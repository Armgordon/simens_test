import type { Entity } from '@domain';

export interface Dot extends Entity {
  value: number;
  timestamp: number;
}

export interface DotData extends Entity {
  x: number;
  y: number;
  value: number;
}
