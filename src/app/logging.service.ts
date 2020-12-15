export class LoggingService {
  logStatusChange(status: string) {
    console.log("A sever status changed, new status: " + status);
  }
}
