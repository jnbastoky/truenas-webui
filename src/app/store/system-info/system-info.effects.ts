import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fromUnixTime } from 'date-fns';
import { EMPTY, of } from 'rxjs';
import {
  catchError, map, mergeMap,
} from 'rxjs/operators';
import { WebSocketService } from 'app/services/ws.service';
import { adminUiInitialized } from 'app/store/admin-panel/admin.actions';
import {
  ixHardwareLoaded,
  productTypeLoaded,
  systemBuildTimeLoaded,
  systemHostIdLoaded, systemInfoLoaded, systemInfoUpdated, systemIsStableLoaded,
} from 'app/store/system-info/system-info.actions';

@Injectable()
export class SystemInfoEffects {
  loadSystemInfo = createEffect(() => this.actions$.pipe(
    ofType(adminUiInitialized, systemInfoUpdated),
    mergeMap(() => {
      return this.ws.call('system.info').pipe(
        map((systemInfo) => systemInfoLoaded({ systemInfo })),
        catchError((error) => {
          // TODO: Basically a fatal error. Handle it.
          console.error(error);
          return EMPTY;
        }),
      );
    }),
  ));

  loadIsIxHardware = createEffect(() => this.actions$.pipe(
    ofType(adminUiInitialized),
    mergeMap(() => {
      return this.ws.call('truenas.is_ix_hardware').pipe(
        map((isIxHardware) => ixHardwareLoaded({ isIxHardware })),
        catchError((error) => {
          // TODO: Show error message to user?
          console.error(error);
          return of(ixHardwareLoaded({ isIxHardware: false }));
        }),
      );
    }),
  ));

  loadSystemHostId = createEffect(() => this.actions$.pipe(
    ofType(adminUiInitialized),
    mergeMap(() => {
      return this.ws.call('system.host_id').pipe(
        map((systemHostId) => systemHostIdLoaded({ systemHostId })),
        catchError((error) => {
          console.error(error);
          return of(systemHostIdLoaded({ systemHostId: null }));
        }),
      );
    }),
  ));

  loadSystemIsStable = createEffect(() => this.actions$.pipe(
    ofType(adminUiInitialized),
    mergeMap(() => {
      return this.ws.call('system.is_stable').pipe(
        map((systemIsStable) => systemIsStableLoaded({ systemIsStable })),
        catchError((error) => {
          console.error(error);
          return of(systemIsStableLoaded({ systemIsStable: false }));
        }),
      );
    }),
  ));

  loadProductType = createEffect(() => this.actions$.pipe(
    ofType(adminUiInitialized),
    mergeMap(() => {
      return this.ws.call('system.product_type').pipe(
        map((productType) => productTypeLoaded({ productType })),
        catchError((error) => {
          console.error(error);
          return of(productTypeLoaded({ productType: null }));
        }),
      );
    }),
  ));

  loadSystemBuildTime = createEffect(() => this.actions$.pipe(
    ofType(adminUiInitialized),
    mergeMap(() => {
      return this.ws.call('system.build_time').pipe(
        map((timestamp) => fromUnixTime(timestamp.$date / 1000).getFullYear()),
        map((buildTime) => systemBuildTimeLoaded({ buildTime })),
        catchError((error) => {
          console.error(error);
          return EMPTY;
        }),
      );
    }),
  ));

  constructor(
    private actions$: Actions,
    private ws: WebSocketService,
  ) { }
}
