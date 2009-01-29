#!/usr/bin/env ruby
while x = gets
  while x[0]==32
    x=x[1..-1]
  end
  puts x.chomp
end
