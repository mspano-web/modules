export class UseFactoryService {
  constructor(private readonly Url: string) {}

  connect(): void {
    console.log(`UseFactoryService - Connecting at ${this.Url}....`);
  }
}
