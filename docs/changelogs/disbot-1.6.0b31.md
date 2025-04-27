# DisBot `1.6.0b31` (`1.6.0r1`)

**Changelog**:

- feat: Add Spotify and TikTok API credentials to environment configuration
- feat(giveaway): Enhance giveaway commands with role requirements and message updates
- feat(giveaway): Implement comprehensive giveaway management system
  - Added commands for listing, rerolling, deleting, ending, pausing, and starting giveaways.
  - Introduced a database schema for managing giveaway data, including fields for winners, requirements, and timestamps.
  - Enhanced user interaction with buttons and modals for entering and managing giveaways.
  - Implemented functionality for handling giveaway entries and ensuring proper winner selection.
  - Created a system to automatically end giveaways and notify users of winners.
  - Added emoji support for better user experience in messages and interactions.
  - Removed obsolete code related to previous giveaway management methods.
- feat: Enhance Spotify integration with token retrieval and embed image handling
- feat: Implement Spotify notification system with channel management and message templates
- feat: Add Spotify notification management with channel integration and token retrieval
- feat: Add userinstall command with transcript creation functionality ( SOON™️ )
- feat: Implement backup management buttons with confirmation and cancellation options
- feat: Enhance backup management with modal inputs and detailed error handling
- chore: Bump version to 1.6.0b31 in package.json
- feat: Implement backup creation and restoration system
  - Added backup creation functionality in `backup-create.ts` allowing server owners to create backups of their server settings, channels, roles, and more.
  - Implemented backup restoration in `backup-restore.ts`, enabling users to select and restore from existing backups.
  - Created a select menu for managing backups in `backup-restore-select.ts`.
  - Developed utility functions for handling backup data in `system/backup/index.ts`, including fetching, creating, loading, and removing backups.
  - Defined various TypeScript interfaces for backup data structures in `system/backup/types/`.
  - Enhanced channel and role restoration processes in `system/backup/load.ts` to ensure accurate server state restoration.
  - Added permission handling for channels during backup and restore operations.
  - Included message fetching and restoration capabilities for text channels.
- Refactor backup creation and restoration logic for improved readability and maintainability; add error handling and permissions checks.
- And relaunch the DisBot Customer Feature (1 Free and then **[#✌╎votes](https://discord.com/channels/1084507523492626522/1231307819693641804)** )
- Update some Customer special Features and env managment for the Customer

**_And i will use my commits sometimes as changelog_**
_This release is `1.6.0b31`, but it has all the features of `1.6.0r1`, but totmorow or next week I will patch some things for the backup system that are not ready yet and add some things for giveaway and backup system. So it is `1.6.0b31` and the next small patch will bring it to `1.6.0r1`_.

---

###### And a little sorry, TikTok will come as soon as I've verified myself on TikTok and can then use the API properly. I'll have to dig a little deeper to get everything working. **But it will definitely be available in the next updates!**

###### And regarding autobackups, that will come in 1.6.0r1 as well as an extended guide to creating giveaways.
