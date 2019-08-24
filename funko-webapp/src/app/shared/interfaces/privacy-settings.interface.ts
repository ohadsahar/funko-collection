export class PrivacySettings {
  constructor(public id: string, public showCollection: boolean, public showPersonalData: boolean,
              public canSendMessage: boolean, public friendShowCollection: boolean, public friendShowPersonalData: boolean
              ,public friendCanSendMessage: boolean) { }
}
