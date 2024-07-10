export interface BusSchedule {
    scheduleId?: number;
    busName: string;
    busNumber: number;
    busType: string;
    numofSeats: number;
    origin: string;
    destination: string;
    timings: string;
    fare: number;
  }
  