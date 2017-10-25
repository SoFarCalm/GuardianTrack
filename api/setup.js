var BungieMembershipTypes = {
  None: 0
  TigerXbox: 1
  TigerPsn: 2
  TigerBlizzard: 4
  TigerDemon: 10
  BungieNext: 254
  All: -1
}

var DestinyComponentType = {
  None: 0,
  Profiles: 100,
  // Profiles is the most basic component, only relevant when calling GetProfile. This returns basic information about the profile, which is almost nothing: a list of characterIds, some information about the last time you logged in, and that most sobering statistic: how long you've played.
  VendorReceipts: 101,
  // Only applicable for GetProfile, this will return information about receipts for refundable vendor items.
  ProfileInventories: 102,
  // Asking for this will get you the profile-level inventories, such as your Vault buckets (yeah, the Vault is really inventory buckets located on your Profile)
  ProfileCurrencies: 103,
  // This will get you a summary of items on your Profile that we consider to be "currencies", such as Glimmer. I mean, if there's Glimmer in Destiny 2. I didn't say there was Glimmer.
  Characters: 200,
  // This will get you summary info about each of the characters in the profile.
  CharacterInventories: 201,
  // This will get you information about any non-equipped items on the character or character(s) in question, if you're allowed to see it. You have to either be authenticated as that user, or that user must allow anonymous viewing of their non-equipped items in Bungie.Net settings to actually get results.
  CharacterProgressions: 202,
  // This will get you information about the progression (faction, experience, etc... "levels") relevant to each character, if you are the currently authenticated user or the user has elected to allow anonymous viewing of its progression info.
  CharacterRenderData: 203,
  // This will get you just enough information to be able to render the character in 3D if you have written a 3D rendering library for Destiny Characters, or "borrowed" ours. It's okay, I won't tell anyone if you're using it. I'm no snitch. (actually, we don't care if you use it - go to town)
  CharacterActivities: 204,
  // This will return info about activities that a user can see and gating on it, if you are the currently authenticated user or the user has elected to allow anonymous viewing of its progression info. Note that the data returned by this can be unfortunately problematic and relatively unreliable in some cases. We'll eventually work on making it more consistently reliable.
  CharacterEquipment: 205,
  // This will return info about the equipped items on the character(s). Everyone can see this.
  ItemInstances: 300,
  // This will return basic info about instanced items - whether they can be equipped, their tracked status, and some info commonly needed in many places (current damage type, primary stat value, etc)
  ItemObjectives: 301,
  // Items can have Objectives (DestinyObjectiveDefinition) bound to them. If they do, this will return info for items that have such bound objectives.
  ItemPerks: 302,
  // Items can have perks (DestinyPerkDefinition). If they do, this will return info for what perks are active on items.
  ItemRenderData: 303,
  // If you just want to render the weapon, this is just enough info to do that rendering.
  ItemStats: 304,
  // Items can have stats, like rate of fire. Asking for this component will return requested item's stats if they have stats.
  ItemSockets: 305,
  // Items can have sockets, where plugs can be inserted. Asking for this component will return all info relevant to the sockets on items that have them.
  ItemTalentGrids: 306,
  // Items can have talent grids, though that matters a lot less frequently than it used to. Asking for this component will return all relevant info about activated Nodes and Steps on this talent grid, like the good ol' days.
  ItemCommonData: 307,
  // Items that *aren't* instanced still have important information you need to know: how much of it you have, the itemHash so you can look up their DestinyInventoryItemDefinition, whether they're locked, etc... Both instanced and non-instanced items will have these properties. You will get this automatically with Inventory components - you only need to pass this when calling GetItem on a specific item.
  ItemPlugStates: 308,
  // Items that are "Plugs" can be inserted into sockets. This returns statuses about those plugs and why they can/can't be inserted. I hear you giggling, there's nothing funny about inserting plugs. Get your head out of the gutter and pay attention!
  Vendors: 400,
  VendorCategories: 401,
  VendorSales: 402,
  Kiosks: 500
}
