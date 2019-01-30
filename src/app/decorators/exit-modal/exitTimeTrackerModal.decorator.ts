import { ExitModal } from './exitModal.decorator';
import { TimeTracker } from '../timeTracker.decorator';

export function ExitTimeTrackerModal(viewName) {
  return function (constructor) {
    ExitModal(viewName)(TimeTracker()(constructor));
  }
}
