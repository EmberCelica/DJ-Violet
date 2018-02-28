; DO NOT OPEN THIS FILE WITH NOTEPAD.  If you don't have a preferred text
; editor, use notepad++ or any other modern text editor.
;
; If you edit example_options.ini, Save-As options.ini
;
; This is the main configuration file for MusicBot.  You will need to edit
; this file when you setup the bot. The bot must be restarted for edits to
; take effect, but a reload command will be created in the future.
; Currently the bot does not overwrite any settings, but this may change in a
; future update.


; HOW TO GET VARIOUS IDS:
; http://i.imgur.com/GhKpBMQ.gif
; Enable developer mode (options, settings, appearance), right click the
; object you want the id of, and click Copy ID
; For roles you have to use the listids command.



; HOW TO GET VARIOUS IDS:
; http://i.imgur.com/GhKpBMQ.gif
; Enable developer mode (options, settings, appearance), right click the object you want the id of, and click Copy ID
; This works for basically everything you would want the id of (channels and users).  For roles you have to right click a role mention.


[Credentials]
; If you have a bot account (which you should), you can find your token here:
;     https://discordapp.com/developers/applications/me/
; Then click the button for your bot to go to the bot's page.
; Make sure "Require OAuth2 Code Grant" is unchecked.  You also do not need to
; add any "Redirect URIs" or "RPC Origins".
;
Token = NDE3ODU2MTk2NTE1NDYzMTY4.DXZIMQ.7qOl8ernoauTRGPfRHBR8GmYJ1o


[Permissions]
; This option is for setting which user has full* permissions/control of the
; bot.  Only one user can be set here. Additional users can be granted
; permissions in permissions.ini, read that for more details.
;
; You can use this option two different ways:
;
;   1. If set to "auto", the bot will set the owner to the owner of the
;      application/bot account.  This can only be used with bot accounts.
;
;   2. To set the owner to another user, this should be set to the user's ID.
;      Getting a user's ID is explained above.
;
;      Example:
;         OwnerID = 998877665544332211
;
;      TLDR: enable developer mode in discord, right click a user's name in
;            discord, Copy ID, paste here.
;
; * The owner is not automatically granted dev command access (see below)
; 
OwnerID = 399413522687328256

; This option is for developer use only.  Adding user ids here will allow the
; listed users to use commands marked as "Dev only".  These commands do not
; show up in the help command list, and include the "debug" command, which is
; used to run arbitrary code (very dangerous).  This should only be used when
; actively developing the bot.  Users with no interest in making changes to
; the bot's code should ignore this option completely. 
; 
; Note: The owner is NOT automatically added to this group.  These are special
; commands outside the scope of normal use.  Users must be explicitly added.
;
;DevIDs =


[Chat]
; Change this if you don't want commands to trigger another bot
; Example:
;   CommandPrefix = *
; This means the commands you use in chat are *play, *skip, etc.
;
; In case you were wondering, this explanation exists because some people
; haven't learned what "prefix" means.  Reminder, you do not list commands
; here.  That means you DO NOT put something like this:
;   "CommandPrefix = *play *queue *np *skip *clear..." etc.
;
CommandPrefix = &

; Restrict the bot to only listen to certain text channels.  Uncomment the
; line and add channel IDs to enable.  Getting channel IDs is explained above.
; Example:
;   BindToChannels = 1122334455667788 1223344556677889
; (Don't use these ids, they won't work)
;
;BindToChannels =

; Join a channel on startup.  Multiple channels can be added for multiple
; servers. Remember, use IDs, not names.  If both this option and AutoSummon
; are enabled, this option takes priority.
;
;AutojoinChannels =


[MusicBot]
; The starting volume of the bot.  You can use any value from 0.01 to 1.0
; 1.0 means unaltered, 0.25 is 25%, etc
DefaultVolume = .50

; Only allow whitelisted users to use commands.
; Deprecated in favor of permissions.
WhiteListCheck = no

; Skips required to skip a song.  Whichever is lower will be used.
; Skip ratio refers to the percent of non-deafened, non-owner users in the
; voice channel needed to skip a song.
SkipsRequired = 4
SkipRatio = 0.5

; Determines audio cache behavior.
; If yes, videos are saved to disk to avoid redownloading when queued again.
; If no, delete videos after they've played (and not in the queue) to avoid
; filling up disk space.
SaveVideos = yes

; Mentions the user who queued a song when the song begins.
NowPlayingMentions = yes

; Join the owner's voice channel on startup (if they're in one).
AutoSummon = yes

; Play random songs from the autoplaylist when nothing is queued.
UseAutoPlaylist = no

; When no one else is in the voice channel, pause the music, and resume when
; someone joins again.
AutoPause = yes

; Automatically delete messages the bot sends after some time.
DeleteMessages = yes

; Delete the invoking message when DeleteMessages is enabled.  Does nothing
; when DeleteMessages is disabled.  Note the bot must have Manage Messages
; permission in the channel to delete messages from other users.
DeleteInvoking = no

; Save the queue to the disk and update it as it changes.  When the bot shuts
; down (for whatever reason), it will reload and resume the queue it had from
; when it was last running.
PersistentQueue = yes

; Determines the verbosity of console output.  The default level is INFO,
; which is equivalent to what the output level was in previous versions.
; This does not affect the verbosity of logging in the log file, only to the
; console.  The available levels are, in order of least to most verbose:
;   CRITICAL, ERROR, WARNING, INFO, DEBUG
; In addition to the standard logging levels, the following levels are more
; verbose than DEBUG, and should probably only be used for debugging:
; 	VOICEDEBUG, FFMPEG, NOISY, EVERYTHING
DebugLevel = INFO

; Specify a custom message to use as the bot's status. If left empty, the bot
; will display dynamic info about music currently being played in its status instead.
StatusMessage = Writing letters...
