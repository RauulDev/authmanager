USE [AuthManager]
GO
/****** Object:  Table [dbo].[Permission]    Script Date: 2/1/2021 9:49:33 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Permission](
	[id] [int] NOT NULL,
	[name] [nvarchar](50) NOT NULL,
	[description] [nvarchar](200) NULL,
	[family] [nvarchar](50) NULL,
 CONSTRAINT [PK_Permission] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Role]    Script Date: 2/1/2021 9:49:34 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Role](
	[id] [int] NOT NULL,
	[name] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_Role] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[RolePermission]    Script Date: 2/1/2021 9:49:34 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RolePermission](
	[id] [int] NOT NULL,
	[id_role] [int] NOT NULL,
	[id_permission] [int] NOT NULL,
 CONSTRAINT [PK_RolePermission] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[User]    Script Date: 2/1/2021 9:49:34 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[User](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[fullName] [nvarchar](250) NOT NULL,
	[address] [nvarchar](250) NULL,
	[phone] [nvarchar](50) NULL,
	[email] [nvarchar](50) NOT NULL,
	[age] [smallint] NULL,
	[role] [int] NOT NULL,
	[loginName] [nvarchar](50) NOT NULL,
	[password] [nvarchar](250) NOT NULL,
 CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[Permission] ([id], [name], [description], [family]) VALUES (1, N'ViewNews', N'Welcome message and news', NULL)
INSERT [dbo].[Permission] ([id], [name], [description], [family]) VALUES (2, N'ListUsers', N'List users and filters', N'ManageUsers')
INSERT [dbo].[Permission] ([id], [name], [description], [family]) VALUES (3, N'EditUsers', N'Edit users', N'ManageUsers')
INSERT [dbo].[Permission] ([id], [name], [description], [family]) VALUES (4, N'CreateUsers', N'Create users', N'ManageUsers')
INSERT [dbo].[Permission] ([id], [name], [description], [family]) VALUES (5, N'DeleteUsers', N'Delete users', N'ManageUsers')
INSERT [dbo].[Role] ([id], [name]) VALUES (1, N'Administrator')
INSERT [dbo].[Role] ([id], [name]) VALUES (2, N'Visitor')
INSERT [dbo].[Role] ([id], [name]) VALUES (3, N'Assistant')
INSERT [dbo].[Role] ([id], [name]) VALUES (4, N'Editor')
INSERT [dbo].[RolePermission] ([id], [id_role], [id_permission]) VALUES (1, 1, 1)
INSERT [dbo].[RolePermission] ([id], [id_role], [id_permission]) VALUES (2, 1, 2)
INSERT [dbo].[RolePermission] ([id], [id_role], [id_permission]) VALUES (3, 1, 3)
INSERT [dbo].[RolePermission] ([id], [id_role], [id_permission]) VALUES (4, 1, 4)
INSERT [dbo].[RolePermission] ([id], [id_role], [id_permission]) VALUES (5, 1, 5)
INSERT [dbo].[RolePermission] ([id], [id_role], [id_permission]) VALUES (6, 3, 2)
INSERT [dbo].[RolePermission] ([id], [id_role], [id_permission]) VALUES (7, 4, 2)
INSERT [dbo].[RolePermission] ([id], [id_role], [id_permission]) VALUES (8, 4, 3)
INSERT [dbo].[RolePermission] ([id], [id_role], [id_permission]) VALUES (9, 1, 2)
INSERT [dbo].[RolePermission] ([id], [id_role], [id_permission]) VALUES (10, 1, 3)
INSERT [dbo].[RolePermission] ([id], [id_role], [id_permission]) VALUES (11, 1, 4)
INSERT [dbo].[RolePermission] ([id], [id_role], [id_permission]) VALUES (12, 1, 5)
SET IDENTITY_INSERT [dbo].[User] ON 

INSERT [dbo].[User] ([id], [fullName], [address], [phone], [email], [age], [role], [loginName], [password]) VALUES (5, N'Administrator', N'Administrator address', N'123', N'admon@admon.com', 99, 1, N'admon', N'123')
SET IDENTITY_INSERT [dbo].[User] OFF
ALTER TABLE [dbo].[RolePermission]  WITH CHECK ADD  CONSTRAINT [FK_RolePermission_Permission] FOREIGN KEY([id_permission])
REFERENCES [dbo].[Permission] ([id])
GO
ALTER TABLE [dbo].[RolePermission] CHECK CONSTRAINT [FK_RolePermission_Permission]
GO
ALTER TABLE [dbo].[RolePermission]  WITH CHECK ADD  CONSTRAINT [FK_RolePermission_Role] FOREIGN KEY([id_role])
REFERENCES [dbo].[Role] ([id])
GO
ALTER TABLE [dbo].[RolePermission] CHECK CONSTRAINT [FK_RolePermission_Role]
GO
ALTER TABLE [dbo].[User]  WITH CHECK ADD  CONSTRAINT [FK_User_Role] FOREIGN KEY([role])
REFERENCES [dbo].[Role] ([id])
GO
ALTER TABLE [dbo].[User] CHECK CONSTRAINT [FK_User_Role]
GO
