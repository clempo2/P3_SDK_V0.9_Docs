/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "P3-SDK", "index.html", [
    [ "Introduction to the P3 SDK", "_introduction.html", [
      [ "What's Included In This Kit", "_introduction.html#WhatsIncluded", null ],
      [ "What You'll Need", "_introduction.html#WhatYoullNeed", null ]
    ] ],
    [ "Overview of the P3", "_overview.html", [
      [ "The Technology Stack", "_overview.html#TechnologyStack", null ],
      [ "Unity and the P3", "_overview.html#UnityAndTheP3", null ],
      [ "Fundamental Concepts", "_overview.html#FundamentalConcepts", null ],
      [ "What's a game?", "_overview.html#WhatsAGame", null ],
      [ "Terminology", "_overview.html#Terminology", null ]
    ] ],
    [ "Structure of a P3 App", "_app_structure.html", [
      [ "The Layers: Mode and GUI", "_app_structure.html#ModeGUI", null ],
      [ "Modes", "_app_structure.html#Modes", null ],
      [ "An Analogy For The Framework", "_app_structure.html#FrameworkAnalogy", null ]
    ] ],
    [ "Getting Started", "_getting_started.html", [
      [ "Installation", "_getting_started.html#Installation", [
        [ "Unity Installation", "_getting_started.html#UnityInstallation", null ]
      ] ],
      [ "The P3 Application Sample", "_getting_started.html#SampleApp", null ],
      [ "The Simulator", "_getting_started.html#Simulator", null ]
    ] ],
    [ "Creating Your Playfield Module", "_creating_playfield_module.html", [
      [ "Introduction", "_creating_playfield_module.html#CreatingPlayfieldModuleIntroduction", null ],
      [ "Mechanical Specs", "_creating_playfield_module.html#PlayfieldModuleMechanicals", null ],
      [ "Electronic Specs", "_creating_playfield_module.html#PlayfieldModuleElectronics", null ],
      [ "Playfield Module Identifier", "_creating_playfield_module.html#PlayfieldModuleID", null ],
      [ "Playfield Module USB Device", "_creating_playfield_module.html#PlayfieldModuleUSBDevice", null ],
      [ "Playfield Module Driver", "_creating_playfield_module.html#PlayfieldModuleDriver", [
        [ "Module Definition File", "_creating_playfield_module.html#PlayfieldModuleDefinitionFile", [
          [ "Coordinate System", "_creating_playfield_module.html#ModuleDefinitionCoords", null ],
          [ "Game Section", "_creating_playfield_module.html#ModuleDefinitionGame", null ],
          [ "Flippers Section", "_creating_playfield_module.html#ModuleDefinitionFlippers", null ],
          [ "Bumpers Section", "_creating_playfield_module.html#ModuleDefinitionBumpers", null ],
          [ "UpperDisplay Section", "_creating_playfield_module.html#ModuleDefinitionUpperDisplay", null ],
          [ "TroughLaunchers Section", "_creating_playfield_module.html#ModuleDefinitionTroughLaunchers", null ],
          [ "Switches Section", "_creating_playfield_module.html#ModuleDefinitionSwitches", null ],
          [ "Coils Section", "_creating_playfield_module.html#ModuleDefinitionCoils", null ],
          [ "LEDs Section", "_creating_playfield_module.html#ModuleDefinitionLEDs", null ],
          [ "LEDStrings Section", "_creating_playfield_module.html#ModuleDefinitionLEDStrings", null ],
          [ "Servos Section", "_creating_playfield_module.html#ModuleDefinitionServos", null ],
          [ "Steppers Section", "_creating_playfield_module.html#ModuleDefinitionSteppers", null ],
          [ "BallPaths Section", "_creating_playfield_module.html#BallPaths", null ]
        ] ],
        [ "Example Module Definition Files", "_creating_playfield_module.html#ModuleDefinitionExample", null ],
        [ "Developing The DLL", "_creating_playfield_module.html#PlayfieldModuleDriverDLL", [
          [ "Main Components of a Module Driver DLL", "_creating_playfield_module.html#ModuleDriverDLLComponents", null ],
          [ "Custom Launch Code", "_creating_playfield_module.html#CustomLaunchCode", null ]
        ] ],
        [ "Module Driver Diagnostics", "_creating_playfield_module.html#ModuleDriverDiagnostics", null ],
        [ "Building the Module Driver Package", "_creating_playfield_module.html#ModuleDriverPackage", null ]
      ] ]
    ] ],
    [ "Creating Your App", "_creating_app.html", [
      [ "Choosing Your AppCode", "_creating_app.html#ChoosingAppCode", null ],
      [ "Creating Your Project", "_creating_app.html#CreatingYourProject", null ],
      [ "Configuring Your Application", "_creating_app.html#AppConfiguration", null ],
      [ "Mapping To Hardware", "_creating_app.html#HardwareMapping", null ]
    ] ],
    [ "Folders and Namespaces", "_folders_namespaces.html", [
      [ "The Assets Folder Structure", "_folders_namespaces.html#AssetsFolder", null ],
      [ "The Namespace Structure", "_folders_namespaces.html#NamespaceStructure", null ]
    ] ],
    [ "The Mode Layer", "_mode_layer.html", "_mode_layer" ],
    [ "Controlling Physical Features", "_physical_features.html", [
      [ "Drivers", "_physical_features.html#DriverActions", null ],
      [ "A Mode Example: A Kickback Mechanism", "_physical_features.html#KickbackExample", null ],
      [ "Launching Balls Into Play", "_physical_features.html#TroughLaunching", [
        [ "Initializing The Multimorphic.P3App.BallLauncher", "_physical_features.html#InitializeBallLauncher", null ],
        [ "Request Access To TroughLaunchers", "_physical_features.html#RequestTroughLaunchers", null ],
        [ "Request Launches", "_physical_features.html#RequestLaunchers", [
          [ "Dummy Launches", "_physical_features.html#DummyLaunches", null ]
        ] ],
        [ "Detecting Balls Shot Into a TroughLauncher", "_physical_features.html#TroughLauncherBallEntry", null ]
      ] ],
      [ "Controlling Flippers", "_physical_features.html#Flippers", [
        [ "Enabling the Flippers", "_physical_features.html#EnablingFlippers", null ],
        [ "Hiding Flippers", "_physical_features.html#HidingFlippers", null ],
        [ "Setting Default Flipper Strength", "_physical_features.html#SettingDefaultFlipperStrength", null ],
        [ "Changing Flipper Strength During A Game", "_physical_features.html#ChangingFlipperStrength", null ],
        [ "Resetting Flipper Strength During A Game", "_physical_features.html#ResetFlipperStrength", null ],
        [ "Pausing The Flippers", "_physical_features.html#PauseFlippers", null ],
        [ "Manually Driving a Flipper", "_physical_features.html#PulsingFlippers", null ]
      ] ],
      [ "Controlling Bumpers", "_physical_features.html#ControllingBumpers", [
        [ "Manually Driving Bumpers", "_physical_features.html#DrivingBumpers", null ],
        [ "Enabling the Bumpers", "_physical_features.html#EnablingBumpers", null ],
        [ "Pulsing a Bumper", "_physical_features.html#PulsingBumpers", null ]
      ] ],
      [ "Wall/Scoop Assembly", "_physical_features.html#WallScoopAssembly", [
        [ "Walls", "_physical_features.html#Walls", [
          [ "Raising and Lowering Walls", "_physical_features.html#RaisingAndLoweringWalls", null ],
          [ "Detecting Ball Hits", "_physical_features.html#DetectingBallsHittingWalls", null ]
        ] ],
        [ "Scoops", "_physical_features.html#Scoops", [
          [ "Raising and Lowering Scoops", "_physical_features.html#RaisingAndLoweringScoops", null ],
          [ "Detecting Balls Shot Into Scoops", "_physical_features.html#DetectingBallsInScoops", null ]
        ] ]
      ] ],
      [ "LEDs", "_physical_features.html#LEDs", [
        [ "LEDScripts", "_physical_features.html#LEDScripts", [
          [ "Basic Operation", "_physical_features.html#LEDScriptsBasic", null ],
          [ "Example: Chase", "_physical_features.html#LEDScriptsChase", null ],
          [ "LEDScript Helper Methods", "_physical_features.html#LEDScriptsHelper", null ],
          [ "Synchronizing LEDScripts", "_physical_features.html#SynchronizingLEDScripts", null ]
        ] ],
        [ "Simulating LEDs", "_physical_features.html#LEDSimulations", null ]
      ] ],
      [ "Detecting Playfield Shots", "_physical_features.html#DetectingShots", [
        [ "Ball Paths", "_physical_features.html#DetectingShotsViaBallPaths", null ],
        [ "Shots into TroughLaunchers", "_physical_features.html#DetectingShotsViaTroughLaunchers", null ],
        [ "Shots into Mechs", "_physical_features.html#DetectingShotsIntoMechs", null ]
      ] ]
    ] ],
    [ "The GUI Layer", "_g_u_i_layer.html", [
      [ "Scenes of an App", "_g_u_i_layer.html#Scenes", null ],
      [ "Anatomy of a Scene", "_g_u_i_layer.html#AnatomyOfScene", null ],
      [ "Scene Controller", "_g_u_i_layer.html#SceneController", null ],
      [ "P3Aware Objects", "_g_u_i_layer.html#P3AwareObjects", null ],
      [ "Ball Collision Detection", "_g_u_i_layer.html#CollisionDetection", null ],
      [ "A GUI Example: A Moving Virtual Target", "_g_u_i_layer.html#UIMovingTargetExample", null ],
      [ "P3Playfield", "_g_u_i_layer.html#P3Playfield", null ],
      [ "Audio", "_g_u_i_layer.html#Audio", null ],
      [ "Events in GUI Layer", "_g_u_i_layer.html#EventsInGUILayer", [
        [ "Receiving Mode Events In GUI Scripts", "_g_u_i_layer.html#ReceivingModeEventsInGUI", null ],
        [ "Sending Events To Modes", "_g_u_i_layer.html#SendingGUIEventsToModes", null ]
      ] ]
    ] ],
    [ "Adding Game Content", "_adding_game_content.html", [
      [ "Popup Scores", "_adding_game_content.html#PopupScores", null ],
      [ "Named Locations", "_adding_game_content.html#NamedLocations", null ],
      [ "Adding a Scene", "_adding_game_content.html#AddScene", null ]
    ] ],
    [ "Additional Platform Features", "_additional_platform_features.html", [
      [ "Feature Menu", "_additional_platform_features.html#FeatureMenu", [
        [ "Player Profiles", "_additional_platform_features.html#PlayerProfiles", [
          [ "Player-specific Settings", "_additional_platform_features.html#PlayerProfileSettings", null ],
          [ "Player Profile Events", "_additional_platform_features.html#EventBasedPlayerProfileManagement", null ],
          [ "Team Games", "_additional_platform_features.html#TeamGames", null ],
          [ "Save/Restore State", "_additional_platform_features.html#SaveRestore", null ]
        ] ],
        [ "Bluetooth Connections", "_additional_platform_features.html#Bluetooth", null ]
      ] ],
      [ "Restarts and Removing Players", "_additional_platform_features.html#RestartsAndRemovingPlayers", [
        [ "Player Removal", "_additional_platform_features.html#PlayerRemoval", null ],
        [ "Soft Restarts", "_additional_platform_features.html#SoftRestarts", null ]
      ] ]
    ] ],
    [ "Customizing Your Game", "_customizing_your_game.html", [
      [ "Basic Game Features", "_customizing_your_game.html#BasicGameFeatures", [
        [ "Scoring", "_customizing_your_game.html#Scoring", null ],
        [ "Replays", "_customizing_your_game.html#Replays", null ],
        [ "Game Management", "_customizing_your_game.html#GameManagement", null ],
        [ "End Of Ball Bonus", "_customizing_your_game.html#EndOfBallBonus", null ],
        [ "Tilt Handling", "_customizing_your_game.html#Tilt", null ],
        [ "High Score Tracking", "_customizing_your_game.html#HighScoreCheck", null ],
        [ "Credits", "_customizing_your_game.html#Credits", null ]
      ] ]
    ] ],
    [ "Logging", "_logging_page.html", [
      [ "Logging", "_logging_page.html#Logging", [
        [ "Creating log messages", "_logging_page.html#CreatingLogs", null ],
        [ "Viewing log messages", "_logging_page.html#ViewingLogs", null ]
      ] ]
    ] ],
    [ "Deployment", "_deployment.html", [
      [ "Preparing To Deploy", "_deployment.html#PreparingToDeploy", [
        [ "Directory Structure", "_deployment.html#DirectoryStructure", null ]
      ] ],
      [ "Deploying To Your P3 For Testing", "_deployment.html#ToP3", null ],
      [ "Obtaining A Unique Playfield ModuleID", "_deployment.html#ObtainingModuleID", null ],
      [ "Releasing Your App", "_deployment.html#Releasing", null ]
    ] ],
    [ "Frequently Asked Questions", "_f_a_q.html", [
      [ "Is there an easy way to see the frame rate?", "_f_a_q.html#FrameRate", null ],
      [ "How can I add a new setting for my game so that it appears in the Settings menu?", "_f_a_q.html#FAQNewAttribute", null ],
      [ "How can I access GameAttributes from GUI scripts?", "_f_a_q.html#FAQSendAttributeToGUI", null ],
      [ "How do I compile my App so I can run it on my development machine?", "_f_a_q.html#Compiling", null ],
      [ "How do I start a game after running my app?", "_f_a_q.html#StartingAGame", null ],
      [ "Can I use Unity version x.y.z to develop my app?", "_f_a_q.html#Unity5", null ]
    ] ],
    [ "List of Events", "_event_list.html", [
      [ "List of ModeToMode Events", "_event_list.html#ModeToModeEventList", null ],
      [ "List of GUIToMode Events", "_event_list.html#GUIToModeEventList", null ],
      [ "List of ModeToGUI Events", "_event_list.html#ModeToGUIEventList", null ]
    ] ],
    [ "License", "_license.html", null ],
    [ "Packages", "namespaces.html", [
      [ "Package List", "namespaces.html", "namespaces_dup" ],
      [ "Package Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", null ],
        [ "Functions", "namespacemembers_func.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", null ],
        [ "Properties", "functions_prop.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"_adding_game_content.html",
"class_multimorphic_1_1_net_proc_game_1_1dmd_1_1_animated_layer.html#a4856562c6d63b34ddbed52b18867f5d8",
"class_multimorphic_1_1_net_proc_game_1_1dmd_1_1_push_transition.html#a68b4131efa74319cae1c2001ddb50910",
"class_multimorphic_1_1_net_proc_machine_1_1_lamps_1_1_lamp_show_mode.html#affbb9957ad13ac2f8d77b2d413f706c8",
"class_multimorphic_1_1_net_proc_machine_1_1_machine_1_1_virtual_driver.html#a7c21452ca6ff0a2946348720c552bc5c",
"class_multimorphic_1_1_p3_1_1_mechs_1_1_walls_scoops.html#a765298346e625b9172eed86cd6d9ea12",
"class_multimorphic_1_1_p3_app_1_1_g_u_i_1_1_attribute_menu_item.html#a8480c8f47ea23e9762fe5ad47740399e",
"class_multimorphic_1_1_p3_app_1_1_g_u_i_1_1_backbox_image.html",
"class_multimorphic_1_1_p3_app_1_1_g_u_i_1_1_experimental_ball_tracker.html#a63d8f2042fe8ec610f3e60f7b1e7afc2",
"class_multimorphic_1_1_p3_app_1_1_g_u_i_1_1_grid_menu.html#ad269b28aa8cd13edf17fa2ddd53d8f8c",
"class_multimorphic_1_1_p3_app_1_1_g_u_i_1_1_menu_1_1_alphabet_menu.html#ad957d0795ad1ebc6b372a54373d433ba",
"class_multimorphic_1_1_p3_app_1_1_g_u_i_1_1_menu_base.html#ad1189f9ed564cf685b1959e78fad5fa1",
"class_multimorphic_1_1_p3_app_1_1_g_u_i_1_1_player_score_display.html#a6512a99898050c74786d9ca1c0599067",
"class_multimorphic_1_1_p3_app_1_1_g_u_i_1_1_profile_sub_menu_item.html#a243cb66d1d8db764a12a70c98af5522f",
"class_multimorphic_1_1_p3_app_1_1_g_u_i_1_1_selector_1_1_confirmation_selector.html#a9f3d661aa95d038dab01f8cd7ff12bab",
"class_multimorphic_1_1_p3_app_1_1_g_u_i_1_1_selector_1_1_selector.html#a969b5e7d3ba8e941c872e5b96ba9e51f",
"class_multimorphic_1_1_p3_app_1_1_g_u_i_1_1_settings_menu.html#a13d0223ac6733c10b8c27137be67bbc8",
"class_multimorphic_1_1_p3_app_1_1_g_u_i_1_1_text_editor.html",
"class_multimorphic_1_1_p3_app_1_1_g_u_i_1_1_volume_selector.html#a1e7f9f27d136fb331a90f42bf732da33",
"class_multimorphic_1_1_p3_app_1_1_modes_1_1_backbox_colors_mode.html#af0c38974685a13781a69b86808903191",
"class_multimorphic_1_1_p3_app_1_1_modes_1_1_base_game_mode.html#a70b3f17647bd4f0464ecd17115083121",
"class_multimorphic_1_1_p3_app_1_1_modes_1_1_data_1_1_achievements_mode.html#a9ac6f942db1b624598e424739ec12547",
"class_multimorphic_1_1_p3_app_1_1_modes_1_1_data_1_1_global_settings_mode.html#acb1d01275e13ebd7bd34141f1dcf2620",
"class_multimorphic_1_1_p3_app_1_1_modes_1_1_data_1_1_playfield_module_local_settings_mode.html#ae4fb1cf8cbb5e5be2f24b38849685bdc",
"class_multimorphic_1_1_p3_app_1_1_modes_1_1_data_1_1_statistics_mode.html#a0527392c1925a0b2c6d1928912c04f72",
"class_multimorphic_1_1_p3_app_1_1_modes_1_1_game_manager_mode.html#acb1d01275e13ebd7bd34141f1dcf2620",
"class_multimorphic_1_1_p3_app_1_1_modes_1_1_m_r_p_i_manager_mode.html#a5dd8caac55a50d45b62d0ca7716e3d32",
"class_multimorphic_1_1_p3_app_1_1_modes_1_1_p3_mode.html#a4deac35543cc495b4a43a91f0cd1d470",
"class_multimorphic_1_1_p3_app_1_1_modes_1_1_playfield_module_1_1_playfield_module_manager.html#ae4fb1cf8cbb5e5be2f24b38849685bdc",
"class_multimorphic_1_1_p3_app_1_1_modes_1_1_ticket_dispense_mode.html#ade4254892b8888d6807d1c39736c69c4",
"class_multimorphic_1_1_p3_s_a_1_1_g_u_i_1_1_bootstrap_scene_controller.html#a0914566e13e4efe2b4368a0f58e044c9",
"class_multimorphic_1_1_p3_s_a_1_1_g_u_i_1_1_p3_s_a_audio.html#a29506b28b4425e506fa33836514acee3",
"class_multimorphic_1_1_p3_s_a_1_1_g_u_i_1_1_p3_s_a_text_selector.html#a8480c8f47ea23e9762fe5ad47740399e",
"class_multimorphic_1_1_p3_s_a_1_1_g_u_i_1_1_profile_selector.html#a63d8f2042fe8ec610f3e60f7b1e7afc2",
"class_multimorphic_1_1_p3_s_a_1_1_modes_1_1_data_1_1_p3_s_a_game_attribute_manager_mode.html#a3355645822dc747b8749b67339981a94",
"class_multimorphic_1_1_p3_s_a_1_1_modes_1_1_high_score_name_selector_mode.html#a98386f36653eda23112d7c3a13f1c5b0",
"class_multimorphic_1_1_p3_s_a_1_1_modes_1_1_menu_1_1_p3_s_a_profile_name_text_editor_mode.html#aff57e1ccf52b7b98d31b584501a3d16c",
"class_multimorphic_1_1_p3_s_a_1_1_modes_1_1_p3_s_a_base_game_mode.html#adee2ca25239a722d01c8dcff5ba28078",
"class_multimorphic_1_1_p3_s_a_1_1_modes_1_1_settings_selector_mode.html#ae4fb1cf8cbb5e5be2f24b38849685bdc",
"class_p3_s_a_volume_selector_item.html#a63d8f2042fe8ec610f3e60f7b1e7afc2"
];

var SYNCONMSG = 'click to disable panel synchronization';
var SYNCOFFMSG = 'click to enable panel synchronization';
var LISTOFALLMEMBERS = 'List of all members';