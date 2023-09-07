export class UserDto{
    slack_name: string
    current_day: string
    utc_time: Promise<String> | String
    track: string
    github_file_url: string
    github_repo_url: string
    status_code: number
}